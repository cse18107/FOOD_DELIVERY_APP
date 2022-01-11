const User = require('../models/user-schema');

exports.getAllUsers = async(req,res)=>{
    try{
        const users = await User.find();
        res.status(200).json({
            status:'success',
            message:{
                users
            }
        });
    }catch(err){
        res.status(400).json({
            status:'failed',
            message:err
        });
    }
};
exports.getUser = async(req,res) => {
    try{
        const user = await User.findById(req.params.id);
        res.status(200).json({
            status:'success',
            message:{
                user
            }
        });
    }catch(err){
        res.status(400).json({
            status:'failed',
            message:err
        });
    }
};
exports.postUserData = async(req,res) => {
    try{
        const user = await User.create(req.body);
        res.status(200).json({
            status:'success',
            message:{
                user
            }
        });
    }catch(err){
        console.log(err);
        res.status(400).json({
            status:'failed',
            message:err
        });
    }
};
exports.editUserData = async(req,res) => {
    try{
        const user = await User.findByIdAndUpdate(req.params.id,req.body);
        res.status(200).json({
            status:'success',
            message:{
                user
            }
        });
    }catch(err){
        res.status(400).json({
            status:'failed',
            message:err
        });
    }
};
exports.deleteUserData = async(req,res) => {
    try{
        const user = await User.findByIdAndDelete(req.params.id);
        res.status(200).json({
            status:'success',
            message:{
                user
            }
        });
    }catch(err){
        res.status(400).json({
            status:'failed',
            message:err
        });
    }
};
