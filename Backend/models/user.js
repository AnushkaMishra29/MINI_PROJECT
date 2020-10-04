const mongoose = require('mongoose');
const vollenters = require('./vollenters');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email:
    {
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    name:
    {
        type:String,
        required:true
    },
    verified:
    {
        type:Boolean,
        required:true,
        default:false
    },
    vollenter:
    {
        type:Schema.Types.ObjectId, ref:'vollenters',
    }


})

module.exports = mongoose.model('users',userSchema);