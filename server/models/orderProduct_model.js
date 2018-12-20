const database = require('../databaseconnection');
const Sequelize = require('sequelize');
const Order = require('./order_model');

let OrderProduct = Order.Product;
OrderProduct=database.define('orderProducts', {
    number: Sequelize.INTEGER,
});

module.exports = OrderProduct;