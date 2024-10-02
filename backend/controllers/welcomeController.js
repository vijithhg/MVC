
const userModel = require("../models/userModel")

const welcomeUser = async(req,res)=>{
   
    try{
        const userData = await userModel.findOne({
            _id : req.userId
            })

        res.status(200).json({
            success :true,
            message:`Welcome ${userData.name}`,
            email: userData.email
        })
    }catch(error){
        res.status(500).json({
            message:error.message
        })
    }
}

module.exports={welcomeUser}