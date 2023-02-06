const express = require('express')
const userRouter = require('./routers/user-router')
const categoryRouter = require('./routers/category-router')
const productRouter = require('./routers/product-router')
const SequelizeManager = require('./Utils/sequelize-manager')

const app = express()

app.use(express.urlencoded({extended:true}))

app.use('/api/users', userRouter)
app.use('/api/categories', categoryRouter)
app.use('/api/products', productRouter)

const manager = new SequelizeManager()

manager.authenticate()

manager.syncModels((message, status)=>{
    if(status){
        console.log(message)
        app.listen(5000)

    }
})

manager.modifyRelations()


