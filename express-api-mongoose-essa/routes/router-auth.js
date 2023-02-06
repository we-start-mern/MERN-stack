const  express = require('express')
const userModel = require('../models/model-users')
const router = express.Router()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

router.post('/login', async(req, res)=>{
    let user = await userModel.findOne({email:req.body.email})
    if(!user){
        res.status(400).json({status:false, msg:"email not found"})
    }else{
        let correctPassword = await bcrypt.compare(req.body.password, user.password )
        if(correctPassword){
            let token =  jwt.sign({name:user.name, id:user._id, isAdmin:user.isAdmin},"privatekey to verify",{expiresIn:"1h"})
            res.header('auth-token', token)
            res.status(200).json({status:true, user:user})

        }else{
            res.status(400).json({status:false, msg:"password not correct"})
        }
    }
})

module.exports = router