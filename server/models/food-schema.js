const mongoose = require('mongoose');

const food_schema = new mongoose.Schema({
    name:{
        type:String,
        // required:true
    },
    price:{
        type:Number,
        // required:true
    },
    ratting:{
        type:String,
        // required:true
    },
    description:{
        type:String

    },
    category:{
        type:String,
        // required:true
    },
    image:{
        type:String,
        // required:true
    },
    //feedback:[String]
});

const Food = mongoose.model('Food',food_schema);

module.exports = Food;