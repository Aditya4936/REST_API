const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true,
    },
    price:{
        type:Number,
        require:[true,"Price is required"],
    },
    feature:{
        type:Boolean,
        default:false,
    },
    rating:{
        type:Number,
        default:4.5,
    },
    createdAt:{
        type:Date,
        default:Date.now(),
    },
    company:{
        type:String,
        enum:{
            values:["Nike","Adidas","Puma", "Apple","Dell"],
            message:`{VALUE} is invalid`
        }
    },
})

module.exports = mongoose.model( "Product",productSchema) 