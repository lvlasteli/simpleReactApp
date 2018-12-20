const Sequelize = require('sequelize');
const database = require('../databaseconnection');

const User = database.define('user', {
    name: Sequelize.STRING,
    email: {
        type: Sequelize.STRING,
        required: true,
        unique: true
    },
    password: {
        type: Sequelize.STRING,
        required: true
    }
});

module.exports = User;