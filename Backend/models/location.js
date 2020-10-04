const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const locationScheme = new Schema({
 location:
 {
     type:String,
     required:true,
 } 
})
module.exports = mongoose.model('locations',locationScheme);