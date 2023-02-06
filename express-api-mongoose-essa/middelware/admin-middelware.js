const userModel = require("../models/model-users")




exports.admin = async(req, res, next)=>{
    if(req.user.isAdmin){
        next()
    }else{
        res.status(403).json({status:false, msg:"not admin"})
    }

}