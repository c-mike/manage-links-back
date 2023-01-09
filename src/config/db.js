const Sequelize = require('sequelize')
require('dotenv').config()

module.exports = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PWD, {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    
    operatorsAliases: false,

    // pool: {
    //     max: 5,
    //     min: 0,
    //     acquire: 3000,
    //     idle: 1000
    // }
})
