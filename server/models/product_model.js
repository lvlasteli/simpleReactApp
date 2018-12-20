const Sequelize = require('sequelize');
const database = require('../databaseconnection');

const Product = database.define('product', {
    type: Sequelize.STRING,
    name: Sequelize.STRING,
    cost: Sequelize.DOUBLE
});

module.exports = Product;