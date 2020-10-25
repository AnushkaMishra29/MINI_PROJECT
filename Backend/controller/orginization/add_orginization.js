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
// const fileStorage=multer.diskStorage({
//     destination:(req,file,cb)=>
//     {
//         cb(null,'../../images')
//     },
//     filename:(req,file,cb)=>
//     {   
//         cb(null,file.originalname)
//     }
// });   
// const fileFilter=(req,file,cb)=>
//     {
//        if(file.mimetype === 'image/png'||
//          file.mimetype === 'image/jpg'||
//          file.mimetype === 'image/jpeg')
//          {
//           cb(null,true);   
//          }
//          else
//          {
//           cb(null,false);
//          }
//     };
    
    
    const orginization=new organization({
        email:req.body.email,
        password:req.body.password,
        name:req.body.name,
        paytm_number:req.body.paytm_number,
        contact_number:req.body.contact_number

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