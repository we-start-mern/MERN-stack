const sequelize = require('./database')
const Category = require('../models/category-model')
const Product = require('../models/product-model')

module.exports = class SequelizeManager {

    authenticate (){
        //sequelize: Authenticate (connection check)
sequelize.authenticate()
.then(()=>{
    console.log("connected successfully")
}).catch((error)=>{
    console.log('connection failed')
})

    }

    syncModels(callback){
        //sequelize: Sync (create tables from models)
sequelize.sync(/*{force: true}*/).then(() => {
    callback('tables created', true)
}).catch((err) => {
    callback('failed to create tables', false)
}) 
    }


    modifyRelations(){
        // Category hasMany Products
Category.hasMany(Product)

//Product belongsTo Category
Product.belongsTo(Category,{onDelete:"cascade"})

    }
    



//sequelize: Sync (create tables from models)
// sequelize.sync(/*{force: true}*/).then(() => {
//     console.log("tables created")
// }).catch((err) => {
//     console.log("failed to create tables")
// }) 
} 