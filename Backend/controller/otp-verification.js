const user = require('../models/user');
const otp = require('../models/otp')
const nodemailer=require('nodemailer');
const sendgridTransport=require('nodemailer-sendgrid-transport');
const transport = nodemailer.createTransport(sendgridTransport({
    auth:{
        api_key:process.env.API_KEY
    }
}))

exports.otpcheck=(req,res,next)=>
{
    console.log(req.userId)

otp.findOne({userId:req.userId}).then((result)=>
{
    if(result.otp!==req.body.otp)
    {
        const error = new Error('Invalid Otp');
        error.statusCode = 422;
        throw error;
    }
    user.findOne({_id:req.userId}).then((USER)=>{
        USER.verified=true;
        return USER.save();
   })
   .then((result)=>
   {
    res.status(200).json({
        message: "User Varified",
    })
   })
   .catch(error=>
    {
        console.log(error)
    })
})
}
exports.resend=(req,res,next)=>
{
    let OTP = '';
    for (let i = 0; i < 4; i++) {
        OTP = OTP + Math.floor((Math.random() * 10));
    }
    otp.findOne({userId:req.userId}).then(
        otp=>
        {
            otp.otp=OTP;
            otp.save().then((result)=>
            {
                transport.sendMail({
                    to: req.email,
                    from: 'kavikmr9@gmail.com',
                    subject: 'NEW OTP',
                    html: '<p> your otp is ' + result.otp + ' </p>'

                })
                .then(()=>
                {
                    res.status(200).json({
                        message: "opt send",
                    })
                })
            })     
        }
        
    )
}