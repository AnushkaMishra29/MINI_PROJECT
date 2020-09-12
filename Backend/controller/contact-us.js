const path = require('path');
const nodemailer=require('nodemailer');
const sendgridTransport=require('nodemailer-sendgrid-transport')
const transport = nodemailer.createTransport(sendgridTransport({
    auth:{
        api_key:"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"
    }
}))
exports.contactUs=(req,res,next)=>
{   transport.sendMail({
    to:req.body.email,
    from:'11as1827000588@gmail.com',
    subject:'ihiuh',
    html:'<h1>Email aaya</h1>'

}).then(()=>
{
    res.status(201).json({
        name:req.body.name,
        email:req.body.email,
        query:req.body.query
    });
}
)
.catch(error=>
{
    console.log(error)
})
}