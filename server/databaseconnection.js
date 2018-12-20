const Sequelize = require('sequelize');

const database = new Sequelize('mysqldb', 'root', 'sifra1950', {
    host: 'localhost',
    dialect: 'mysql',
    operatorsAliases: false
});
//default port is 8000
module.exports = database;