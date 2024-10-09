const userModel = require('../models/userModel')

const register = async(req,res)=>{
    const {name,email} =  req.body
    const imageUrl = req.file.filename
    try{
        const user = await userModel.create({name,email,imageUrl})
        res.status(200).json({
            success:true,
            message :'Created Successfully'
        })
    }catch(error){
        res.status(500).json({
            message:'Internal Server Error'
        })
    }
}

module.exports = {register}

