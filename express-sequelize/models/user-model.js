const Sequelize = require('sequelize')
const sequelize = require('../Utils/database')

const User = sequelize.define('user',{
    // id:{
    //     type:Sequelize.BIGINT,
    //     // primarykey:true,
    //     // autoIncrement:true
    // },
    name:{
        type:Sequelize.STRING,
        allowNull:false
    },
    email:{
        type:Sequelize.STRING,
        allowNull:false
    }
})

module.exports = User