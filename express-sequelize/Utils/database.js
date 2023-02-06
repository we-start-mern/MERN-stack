const Sequelize = require('sequelize')

const sequelize = new Sequelize({
    host: "localhost",
    port: "3308",
    database: "sequelize",
    username: "root",
    password: "m4593229",
    dialect: "mysql"
})

module.exports = sequelize;