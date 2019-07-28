const Sequelize = require('sequelize');
const URI = process.env.MYSQL_URI 
? process.env.MYSQL_URI : 'agenciadeviajes';

module.exports = new Sequelize(URI, process.env.USER , process.env.PASSWORD, {
    host: process.env.HOST,
    port: '3306',
    dialect: 'mysql',
    define: {
        timestamps: false
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});