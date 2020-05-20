const {
    addOrder,
    getOrders
} = require('./orderHandler');

const {
    addUser,
    getUser
} = require('./authHandler');

module.exports = {
    getOrders,
    getUser,
    addOrder,
    addUser
}
