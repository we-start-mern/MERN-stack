const express = require('express')
require('express-async-errors')
const mongoose = require('mongoose')
const app = express();
const RouterEmpolyees = require('./routes/router-empolyees')
const RouterUsers = require('./routes/router-users')
const RouterAuth = require('./routes/router-auth')

app.use(express.json())
// app.use(express.urlencoded({extended:true}))
app.use('/api/empolyees/',RouterEmpolyees)
app.use('/api/users/', RouterUsers)
app.use('/api/auth', RouterAuth)

mongoose.connect('mongodb://localhost:27017/mycompany-db').then(()=>app.listen(5000)).catch((error)=>{console.log(error)})
