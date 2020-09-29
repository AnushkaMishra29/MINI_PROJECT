const path = require('path');
const nodemailer=require('nodemailer');
const sendgridTransport=require('nodemailer-sendgrid-transport');
const transport = nodemailer.createTransport(sendgridTransport({
    auth:{
        api_key:process.env.API_KEY
    }
}))
exports.contactUs=(req,res,next)=>
{   
    console.log(req.body)
    transport.sendMail({
        to:'11as1827000588@gmail.com',
        from:'kavikmr9@gmail.com',
        subject:'Query',
        html:'<p>'+req.body.query+'</p>'
    
    })
    .then(()=>
    transport.sendMail({
    to:req.body.email,
    from:'kavikmr9@gmail.com',
    subject:'Query Confirmation',
    html:'<h1>Your Query Has Been Submitted</h1>'
   })).then(()=>
{
    res.status(201).json({
        name:'Arnav'
    });
}
)
}