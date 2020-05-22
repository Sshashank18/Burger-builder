const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");

const databaseHandler = require('./../database/index');
const passport = require('../passport').passport;
const { TOKEN_SECRET_KEY } = require('./../environments');

const router = express.Router();

router.get('/',(req,res,next)=>{
    res.send('Auth Route Working.');
});

router.post('/signup', (req,res,next) => {
      bcrypt.hash(req.body.password, 10, function (err, password) {
            databaseHandler.addUser(req.body.email, password)
                .then(user => {
                    const expirationTime = ((new Date()).getTime()) + (60 * 60 * 1000);  //Test for 3600s

                    const token = jwt.sign({
                        data: user,
                        exp: expirationTime
                    }, TOKEN_SECRET_KEY);

                    res.status(200).send({ user, userId: user.id, token });
              
                })
                .catch(err => {
                    // res.status(400).json({
                    //     message: "Email already Exists"
                    // });
                    res.send(err);
                });
        });
});

router.post('/login', (req,res,next) => {
    passport.authenticate("user", {session: false}, (err,user,info) => {
        if(err || !user){
            return res.status(400).json({
                message: "Invalid Email or Password",
                user: user
            });
        }

        req.login(user, {session: false}, (err) => {
            if(err) {
                res.send(err);
            }

            const expirationTime = ((new Date()).getTime()) + (60 * 60 * 1000);  //Test for 3600s

            const token = jwt.sign({
                data: user,
                exp: expirationTime
            }, TOKEN_SECRET_KEY);
            
            return res.json({
                user:{
                    userId: user.id,
                    userEmail: user.email,
                    expirationTime: expirationTime
                },
                token
            });
        });
    })(req, res, next);
});

router.get('/logout', (req,res,next) => {
    req.logout();
    res.sendStatus(200);
});

module.exports = {
    router
}
