const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const organizationSchema = new Schema({
    email:
    {
        type:String,
        required:true
    },
    name:
    {
        type:String,
        required:true

    },
    password:
    {
        type:String,
        required:true,
    },
    Org_verified:
    {
        type:Boolean,
        default:false,
    },
    Email_verified:
    {
        type:Boolean,
        default:false

    },
    // image:
    // {
    //     type:String,
    //     required:true
    // },    
    // location:
    // {
    //     type:Schema.Types.ObjectId, ref:'locations',
    //     required:true
    // },
    contact_number:
    {
        type:String,
        required:true
    },
    paytm_number:
    {
        type:String,
        required:true
    },
    // document:
    // {
    //     type:String,
    //     required:true
    // }
})

module.exports = mongoose.model('organizations',organizationSchema);