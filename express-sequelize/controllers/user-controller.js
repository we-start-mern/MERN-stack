// const User = require("../models/user-model");

const { where } = require("sequelize");
const User = require("../models/user-model");


exports.index = async (req, res)=>{
    let users = await User.findAll()
    res.status(200).json({status:true, users:users})
};

exports.show = async (req, res)=>{
        try {
        let user = await User.findAll({
            where:{
                id:req.params.id
            }
        })
        res.status(200).json({status:true, user:user})
        } catch (error) {
            res.status(400).json({statsu:false, msg:error})
        }
 
};
exports.store = async(req, res)=>{
    
    try {
        let user = await User.create({
        name:req.body.name,
        email:req.body.email
    })
    res.status(201).json({status:true, user:user})
    } catch (error) {
        res.status(400).json({statsu:false, msg:error.errors[0].message})
    }
};
exports.update = async(req, res)=>{
    let user = await User.findAll({
        where:{
            id:req.params.id
        }
    })
    // console.log(user)
    if(user.length>0){
        let u = user[0]
        let updatedUser = await u.update({
            name:req.body.name,
            email:req.body.email
        })
        res.status(200).json({updatedUser:updatedUser})
    }else{
        res.status(400).json({statsu:false, msg:"user not found"})
    }
};
exports.destroy= async(req, res)=>{
    let deletedUser = await User.destroy({
        where:{
            id:req.params.id
        }
    })
    if(deletedUser==1){
        res.status(201).json({status:true, msg:"deleted successfully"})
    }else{
        res.status(400).json({statsu:false, msg:"deleted falied"})
    }
};