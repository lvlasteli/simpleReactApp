const Sequelize = require('sequelize');

const database = new Sequelize('mysqldb', 'root', 'sifra1950', {
    host: 'localhost',
    dialect: 'mysql',
    operatorsAliases: false
});

module.exports = database;