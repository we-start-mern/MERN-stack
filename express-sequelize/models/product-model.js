const Sequelize = require('sequelize')
const sequelize = require('../Utils/database')

const Product = sequelize.define('product',{
    name:{
        type:Sequelize.STRING(50),
        allowNull:false
        
    },
    price:{
        type:Sequelize.FLOAT,
        defaultValue:0,
        allowNull:false
    },
},
{
    paranoid:true,
    timestamps:true
})

module.exports=Product