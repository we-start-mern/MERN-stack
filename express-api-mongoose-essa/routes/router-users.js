const  express = require('express')
const userModel = require('../models/model-users')
const router = express.Router()
const bcrypt = require('bcrypt')
const { authrization } = require('../middelware/authrization-middelware')
router.get('/profile', authrization, async(req, res)=>{
    
        let userProfile = await userModel.findById(req.user.id).select('-password')
        // console.log(req.user._id)
        // console.log(userProfile)
    res.status(200).json({status:true, userProfile:userProfile}) 
    
})

router.post('/register',async(req, res)=>{
    let user = await userModel.findOne({email:req.body.email})
    if(!user){
        let hashedPassword = await bcrypt.hash(req.body.password, 12)
        let user = {
    name:req.body.name,
    email:req.body.email,
    password:hashedPassword
    }
    let userRegister = await userModel.insertMany(user)
    res.status(200).json({status:true, user:userRegister})
    }else{
        res.status(400).json({status:false, msg:"this email excit"})
    }
})



module.exports =router