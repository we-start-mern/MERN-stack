const mongoose = require('mongoose')

const schemaEmpolyee = mongoose.Schema({
    fullname:{
        type:String,
        required:true
        
    },
    salary:{
        type:Number,
        required:true
    }
})

exports.modelEmpolyee=mongoose.model('empolyee', schemaEmpolyee)