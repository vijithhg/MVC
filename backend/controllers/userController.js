const userModel = require("../models/userModel")


const createUser = async(req,res)=>{
    try{
        const user = new userModel(req.body)
        await user.save()
        res.status(201).json({success:true,user})
    }catch(error){
        res.status(400).json({
            error:error.message
        })
    }
}

const getAllUsers = async (req,res)=>{
    try{
        const users = await userModel.find()
        res.status(200).json({
            success:true,
            data:users
        })
    }catch(error){
        res.status(500).json({
            error:error.messsage
        })
    }
}

const getUserById = async(req,res)=>{
    try{
        const user = await userModel.findById(req.params.id)
        // if(!user){
        //    return res.status(404).json({
        //         message:'UserNotFound'
        //     })
        // }

        res.status(200).json({
            success:true,
            data:user
        })

    }catch(error){
        res.status(500).json({
            error:error.message
        })
    }
}

const deleteUserById =async(req,res)=>{
    try{
        const user = await userModel.findByIdAndDelete(req.params.id)
        res.status(200).json({
            success:true,
            message:'User deleted successfully'
        })
    }catch(error){
        res.status()
    }
}

const updateUserById = async(req,res)=>{
    try{
        const user = await userModel.findByIdAndUpdate(
        req.params.id,        
        req.body)          
    
        res.status(200).json({
            success:true,
            message:'User Updated Successfully'
        })
    }catch(error){
        res.status(400).json({
            message:error.message
        })
    }
}

module.exports = {
    createUser,
    getAllUsers,
    getUserById,
    updateUserById,
    deleteUserById
    
}