const express = require('express')
const { body } = require('express-validator')
const { index, store, show } = require('../controllers/product-controller')
const Product = require('../models/product-model')
const router = express.Router()

router.get('/', index)
router.get('/:id', show)
router.post('/',
[
    body("name").trim().notEmpty().withMessage("Name must not be empty")
    .isLength({min:3, max:20}).withMessage("Name must be between 3 - 10 charachters lengthe ")
    .custom((value, {req})=>{
        return Product.findOne({where:{name:value}})
        .then((result)=>{
            if(result){
                return Promise.reject("name value exists in products")
            }
        })
    }),
    body("price").isNumeric({no_symbols:true}).withMessage("price must be a valid number")
    .trim().notEmpty().isLength({min:1, max:3}).withMessage("price must be between 1 - 3 numbers lengthe")
    
],
 store)

module.exports = router