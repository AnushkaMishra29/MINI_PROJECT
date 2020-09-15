const path = require('path');
const nodemailer=require('nodemailer');
const sendgridTransport=require('nodemailer-sendgrid-transport')
const transport = nodemailer.createTransport(sendgridTransport({
    auth:{
        api_key:"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"
    }
}))
exports.contactUs=(req,res,next)=>
{   console.log(req.body.email)
    transport.sendMail({
    to:req.body.email,
    from:'arnavjainkht@gmail.com',
    subject:'Query Confirmation',
    html:'<h1>Your Query Has Been Submitted</h1>'

}).then(()=>
{
    res.status(201).json({
        name:'Arnav'
    });
}
)
.catch(error=>
{
    console.log(error)
})
}