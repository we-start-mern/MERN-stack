const jwt = require('jsonwebtoken')

exports.authrization = (req, res, next)=>{
    let token = req.header('auth-token')
    if(!token){
       return  res.status(401).json({status:false, msg:"access rejected..."})
    }else{
        try {
            const decodeToken = jwt.verify(token,'privatekey to verify')
            req.user = decodeToken
            // console.log(req.user)
            next()
        } catch (error) {
            res.status(400).json({status:false, msg:"wrong token..."})
        }
    }

}