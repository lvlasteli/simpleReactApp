const Sequelize = require('sequelize');
const database = require('../databaseconnection');

const Order = database.define('order', {
    cost: Sequelize.DOUBLE,
    orderdate: Sequelize.DATE,
});

//set relation
const User =  require('./user_model');
const Product = require('./product_model');


//1 to N
Order.belongsTo(User, {foreignKey: 'userId'});
User.hasMany(Order, {foreignKey: 'userId'});

//N to M
Order.Product=database.define('orderProducts', {
    number: Sequelize.INTEGER,
});
Product.belongsToMany(Order, {through: Order.Product});
Order.belongsToMany(Product, {through: Order.Product});
// so we can join (include) order and orderProduct tables
Order.hasMany(Order.Product);
Order.Product.belongsTo(Order);

module.exports = Order;
