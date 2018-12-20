const Sequelize = require('sequelize');
const database = require('../databaseconnection');

const User = database.define('user', {
    id: {
        type: Sequelize.STRING,
        primaryKey: true,
    },
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