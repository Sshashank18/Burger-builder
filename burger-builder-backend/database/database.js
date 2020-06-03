const Sequelize = require('sequelize');

const {DATABASE_HOST, DATABASE_NAME, DATABASE_USER, DATABASE_PORT, DATABASE_PASSWORD} = require('../environments');

let database = null;

var environment = process.env.NODE_ENV || 'development';
console.log(process.env.NODE_ENV);

if (environment === "production") {
    database = new Sequelize(DATABASE_NAME, DATABASE_USER, DATABASE_PASSWORD, {
        host: DATABASE_HOST,
        port: DATABASE_PORT,
        logging: false,
        dialect: "postgres"
    });
} else {
    database = new Sequelize("burgerBuilder", DATABASE_NAME ,DATABASE_PASSWORD ,{
        host: 'localhost',
        dialect: 'sqlite',
        storage:'burgers.db',
        logging:false
    });
}



const Users = database.define('users',{
    email:{
        type:Sequelize.STRING,
        unique:{
            args: true,
            msg:"Email already Exists"
        },
        allowNull:{
            args: false,
            msg: "Required"
        }
    },
    password:{
        type:Sequelize.STRING,
        allowNull: false
    }
});

const Orders = database.define('orders',{
    price: {
        type: Sequelize.STRING
    },
    date:{
        type: Sequelize.DATE
    },
    name:{
        type: Sequelize.STRING,
        allowNull: {
            args: false,
            msg: 'Name Required'
        }
    },
    street:{
        type: Sequelize.STRING,
        allowNull: {
            args: false,
            msg: 'Street Required'
        }
    },
    zipcode:{
        type: Sequelize.STRING,
        allowNull: {
            args: false,
            msg: 'Zipcode Required'
        }
    },
    email:{
        type: Sequelize.STRING,
        allowNull: {
            args: false,
            msg: 'Email Required'
        }
    },
    country:{
        type: Sequelize.STRING,
        allowNull: {
            args: false,
            msg: 'Country Required'
        }
    },
    method:{
        type: Sequelize.STRING,
        defaultValue: "Fastest"
    }

});

const Ingredients = database.define('ingredients',{
    bacon: {
        type: Sequelize.INTEGER,
        defaultValue: 0
    },
    cheese: {
        type: Sequelize.INTEGER,
        defaultValue: 0
    },
    meat: {
        type: Sequelize.INTEGER,
        defaultValue: 0
    },
    salad: {
        type: Sequelize.INTEGER,
        defaultValue: 0
    }
});

Orders.belongsTo(Users);
Users.hasMany(Orders);

Ingredients.belongsTo(Orders);
Orders.hasOne(Ingredients);


module.exports = {
    database,
    Orders,
    Users,
    Ingredients
}