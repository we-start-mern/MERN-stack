const { validationResult } = require("express-validator")
const Category = require("../models/category-model")
const Product = require("../models/product-model")

exports.index= async (req, res)=>{
    let categories = await Category.findAll({
        include:Product
    })
    res.status(200).json({status:true, categories:categories})
}
exports.show= async (req, res)=>{
   

   
        let category = await Category.findByPk(req.params.id,{
        include: Product
    })
    if(category){
       res.status(200).json({status: true, category:category })
    }else{
       res.status(404).json({status: false, msg:"not category" })
    }
    
}


exports.store = async(req, res) =>{
   let error = validationResult(req)
   if(error.isEmpty()){
     let category = await Category.create({
        name:req.body.name
    })
    res.status(201).json({status: true, category:category })
   }else{
    res.status(400).json({status: false, msg:error.errors[0].msg})

   }
}

