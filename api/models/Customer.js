const mongoose = require('mongoose');


const customerSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Please add name'],
        trim:true,
    },
    address:{
        type:String,
        required:[true,'Please enter an address'],
    },
    salary:{
        type:String,
        required:[true,'Please add a salary'],
        min:0
    }
},{timestamps:true});


module.exports=mongoose.model('Customer',customerSchema);