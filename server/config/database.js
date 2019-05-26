const Sequelize = require('sequelize');

module.exports = new Sequelize('agenciadeviajes', 'root', '', {
    host: 'localhost',
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