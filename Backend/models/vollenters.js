const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const vollentersSchema = new Schema({
    ID:
    {
        type:Schema.Types.ObjectId, ref:'users',
        required:true
    },
    Adharcard_Image:
    {
        type:String,
        required:true,
    },
    age:
    {
        type:String,
        required:true,
    },
    Education_Details:
    {
         type:String,
         required:true,
    },
    Orginization1:
    {
        type:Schema.Types.ObjectId, ref:'organizations',
     
     
    },
    Orginization2:
    {
        type:Schema.Types.ObjectId, ref:'organizations',
        
    
    },
    Orginization3:
    {
        type:Schema.Types.ObjectId, ref:'organizations',
        
       
    },
    verified1:
    {
       type:Boolean,
       default:false
    },
    verified2:
    {
       type:Boolean,
       default:false
    },
    verified3:
    {
       type:Boolean,
       default:false
    }
})

module.exports = mongoose.model('vollenters',vollentersSchema);