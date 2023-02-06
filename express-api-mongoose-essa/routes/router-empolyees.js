const express = require('express')
const { authrization } = require('../middelware/authrization-middelware')
const {  admin } = require('../middelware/admin-middelware')
const { modelEmpolyee } = require('../models/model-empolyees')
// const userModel = require('../models/model-users')
const router = express.Router()



router.post('/',authrization, async(req, res)=>{
    try {
        let empolyee =  {
        fullname:req.body.fullname,
        salary:req.body.salary
    }
    let postEmpolyee = await modelEmpolyee.insertMany(empolyee)
    // console.log(postEmpolyee)
    res.status(200).json({status:true, empolyee:postEmpolyee[0]})
    } catch (error) {
        res.status(400).json({status:false, msg: "errorrr"})
    }
})

router.get('/',authrization, async(req, res)=>{
   try {
    let empoleeys = await modelEmpolyee.find()
   res.status(200).json({status:true, empoleeys:empoleeys})
   } catch (error) {
    res.status(400).json({status:false, msg:"error"})
   }
})

router.get('/pages',authrization, async(req, res)=>{
    try {
        let {page=1, limit=10} = req.query
        const empoleeys = await modelEmpolyee.find()
        .sort('fullname')
        .limit(limit)
        .skip((page-1)*limit).exec()
        res.send(empoleeys)
    } catch (error) {
        
    }
})

router.get('/:id', authrization, async (req, res)=>{
    try {
        let empoleey = await modelEmpolyee.findById({_id:req.params.id})
        res.status(200).json({status:true, empoleey:empoleey})
    
    } catch (error) {
        res.status(400).json({status:false, msg:error.message})
        
    }
    
})



router.put('/:id',authrization, async(req, res)=>{
    try {
        let updatedEmpolyee = await modelEmpolyee.findByIdAndUpdate({_id:req.params.id},
        {
            fullname:req.body.fullname,
        salary:req.body.salary
        },{new:true})
        res.status(200).json({status:true, updatedEmpolyee:updatedEmpolyee})
    } catch (error) {
        res.status(400).json({status:false, msg:"erroreee"})
    }
})

router.delete('/:id', [authrization,admin], async(req, res)=>{
    let findAndRemove =await modelEmpolyee.findByIdAndRemove({_id:req.params.id})
    if(findAndRemove){
        res.status(200).json({status:true, empoleeyDeleted:findAndRemove})
    }else{
       return  res.status(400).json({status:false, msg:" deleted not successfully"})
    }
})


module.exports = router