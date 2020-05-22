const {Users, Orders, Ingredients} = require('./database');

const { databaseParser } = require('./utility');

const getOrders = (userId) => {
    return Orders.findAll({
        where:{
            userId:userId
        },
        attributes: ["id","date","price"],
        include:[{
            model: Ingredients,
            attributes: ["bacon","meat","cheese","salad"]
        }]
    })
    .then(orders => {
        if(!orders)
            return {};
        
        if(typeof orders == "string"){
            orders = [orders]
        }

        return databaseParser(orders);
    })
    .catch(message => console.log(message));
}

const addOrder = (userId, ingredientsObject, price, date, orderData) => {
    return Orders.create({
        userId,
        price,
        date,
        name: orderData.name,
        street: orderData.street,
        zipcode: orderData.zipcode,
        country: orderData.country,
        email: orderData.email,
        method: orderData.delieveryMethod,
    })
    .then(order => {
        return Ingredients.create({
            salad: ingredientsObject.salad,
            bacon: ingredientsObject.bacon,
            meat: ingredientsObject.meat,
            cheese: ingredientsObject.cheese,
            orderId: order.id
        });
    });
}

module.exports = {
    getOrders,
    addOrder
}