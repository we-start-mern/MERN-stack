const { validationResult } = require("express-validator")
const Category = require("../models/category-model")
const Product = require("../models/product-model")

exports.index = async(req, res)=>{
    let products = await Product.findAll()
    res.status(200).json({status:true, products:products})
}

exports.show = async(req, res)=>{
    let product = await Product.findByPk(req.params.id,{
        include:Category
    })

    res.status(200).json({status:true, product:product})
}

exports.store = async (req, res) =>{
    let error = validationResult(req)
    if(error.isEmpty()){
        let product = await Product.create({
        name: req.body.name,
        price: req.body.price,
        categoryId:req.body.categoryId
    })
    res.status(201).json({status:true, product:product})
    }else{
        res.status(400).json({status:false, msg:error.errors[0].msg})
    }
}