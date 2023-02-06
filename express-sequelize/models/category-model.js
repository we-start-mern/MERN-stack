const Sequelize = require('sequelize')
const sequelize = require('../Utils/database')

const Category = sequelize.define('category', {
    name:{
        type:Sequelize.STRING(50),
        allowNull:false
    },
},
{
    paranoid:true, //On delete it will be placed in the delete at column
    timestamps:true,
    
}
)

module.exports=Category