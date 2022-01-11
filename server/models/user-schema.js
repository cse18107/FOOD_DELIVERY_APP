const mongoose = require('mongoose');

const user_schema = new mongoose.Schema({
    name:{
        type:String,
    },
    email:{
        type:String,
    },
    password:{
        type:String,
    },
    image:{
        type:String,
    }
});

const User = mongoose.model('User',user_schema);

module.exports = User;