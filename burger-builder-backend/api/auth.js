const express = require('express');
const bcrypt = require('bcrypt');

const databaseHandler = require('./../database/index');

const router = express.Router();

router.get('/',(req,res,next)=>{
    res.send('Auth Route Working.');
});

router.post('/signup', (req,res,next) => {
    bcrypt.hash(req.body.password, 10, function(err,password){
        console.log(password);
        databaseHandler.addUser(req.body.email, password)
        .then(user => res.status(200).send(user))
        .catch(err => {
            res.status(400).json({
                message: "Email already Exists"
            });
        });
    });
});

router.post('/login', (req,res,next) => {
    passport.authenticate(  )
})

router.get('/logout', (req,res,next) => {
    req.logout();
    res.sendStatus(200);
});

module.exports = {
    router
}


