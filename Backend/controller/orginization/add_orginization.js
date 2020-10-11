const organization = require('../../models/organization')
const {validationResult} = require('express-validator');
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
        email:req.body.email,
        password:req.body.password,
        name:req.body.email,
        paytm_number:req.body.paytm_number,
        contact_number:req.body.contact_number

    })
    orginization.save().then(result=>res.status(200).json({
       message:result
    }))
    .catch((err)=>console.log(err));

}