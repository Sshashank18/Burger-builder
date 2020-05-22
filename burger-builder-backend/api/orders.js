const express = require('express');

const databaseHandler = require('../database/index');
const { NODEMAILER_USERNAME, NODEMAILER_PASSWORD } = require("./../environments");
const nodemailer = require("nodemailer"); 

const router = express.Router();

router.get('/', (req,res,next)=>{
    res.send('Order Route Working.');
});

router.get('/getOrders', (req,res,next)=>{
    databaseHandler.getOrders(req.user.id)
        .then(orders => {
            res.send(orders)
        })
        .catch(err => console.log(err));
});

router.post('/addOrder',(req,res,next) => {
    const orderData = {...req.body.orderData};

    databaseHandler.addOrder(req.user.id, req.body.ingredients, req.body.price, new Date(), orderData)
        .then(response => {
            let transporter = nodemailer.createTransport({
                host: 'smtp.ethereal.email',
                port: 587,
                auth: {
                    user: NODEMAILER_USERNAME,
                    pass: NODEMAILER_PASSWORD
                }
            });
            
            let mailOptions = {
                from: 'shashankaggarwal13@gmail.com',
                to: orderData.email,    
                subject: 'Order Reciept',
                text: ` Hi There,
                        You Placed an order of
                            Salad: ${req.body.ingredients.salad}
                            Cheese: ${req.body.ingredients.cheese}
                            Bacon: ${req.body.ingredients.bacon}
                            Meat: ${req.body.ingredients.meat}
                        and Your Total Is: ${req.body.price}`
            };
            
            // transporter.sendMail(mailOptions, function(error, info){
            //     if (error) {
            //         console.log(error);
            //     } else {
            //         res.sendStatus(200);
            //     }

            res.status(200);
        })
        .catch(err => {
            console.log(err);
            res.sendStatus(400);
        });
    });
// });

module.exports = {
    router
}