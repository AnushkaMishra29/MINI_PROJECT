const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orginizationSchema = new Schema({
    email:
    {
        type:String,
  
    },
    name:
    {
        type:String,
   

    },
    verified:
    {
        type:Boolean,
       
    },
    image:
    {
        type:String,
        required:true
    },    
    location:
    {
        type:String,
      
    },
    contact_number:
    {
        type:String,
    
    },
})

module.exports = mongoose.model('orginization',orginizationSchema);