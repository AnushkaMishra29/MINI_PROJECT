const organization = require('../../models/organization')
const {validationResult} = require('express-validator');
const multer=require('multer')


exports.register=(req,res,next)=>
{   console.log(req.body.email)
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const error = new Error('Validation failed');
        error.statusCode = 422;
        error.data = errors.array();
        throw error;
    } 
    const orginization=new organization({
        name:req.body.name,
        image:req.body.image,
        address:req.body.address,
        location:req.body.location,
        description:req.body.description,
        email:req.body.email

    })
    orginization.save().then(result=>res.status(200).json({
       message:result
    }))
    .catch((err)=>console.log(err));

}
exports.get=(req,res,next)=>
{
    organization.find().then((result)=>
    {
        res.status(200).json({
            message:result
         })
    })
}