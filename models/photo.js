const mongoose = require("mongoose");

const PhotoSchema = new mongoose.Schema({
   url:{type:String, required:true},
   date:String,
   location:String,
 })

 module.exports=mongoose.model('Photo',PhotoSchema)