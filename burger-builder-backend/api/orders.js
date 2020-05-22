const express = require('express');

const databaseHandler = require('../database/index');

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
            res.status(200).send(response);
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