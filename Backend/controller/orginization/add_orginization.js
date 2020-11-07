const organization = require('../../models/organization')
const {validationResult, body} = require('express-validator');
const nodemailer = require('nodemailer');



exports.register=(req,res,next)=>
{   console.log(req.body.email)
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const error = new Error('Validation failed');
        error.statusCode = 422;
        error.data = errors.array();
        throw error;
    } 
    bcrypt.hash(req.body.password, 12).then(
        hashpw => {
    const orginization=new organization({
        name:req.body.name,
        image:req.body.image,
        address:req.body.address,
        location:req.body.location,
        description:req.body.description,
        email:req.body.email,
        head_image:req.body.head_image,
        head_name:req.body.head_name,
        contact_number:req.body.contact_number,
    })
   return orginization.save()
    })
    .then(result => {
        const token = jwt.sign({
            email: result.email,
            userId: result._id.toString()
        }, "somesuperdoopersecret", {
            expiresIn: '24h'
        });
        res.status(200).json({
            message: "OTP IS SEND TO YOUR MAIL PLEASE VERIFY YOURSELF",
            token: token,
            userId: result._id.toString()

        })

        let OTP = '';
        for (let i = 0; i < 4; i++) {
            OTP = OTP + Math.floor((Math.random() * 10));
        }
        const Otps = new otps({
            otp: OTP,
            userId: result._id.toString()
        })
        Otps.save().then((result) => {
                transport.sendMail({
                    to: req.body.email,
                    from: 'kavikmr9@gmail.com',
                    subject: 'OTP',
                    html: '<p>your otp is' + result.otp + '</p>'
                })

            })
            .then(() => {
                console.log("otp send")
                const time = setInterval(() => {
                    otps.findOne({
                        userId: result._id
                    }).then((otp) => {
                        console.log(otp.otp)
                        otp.otp = '';
                        otp.save()
                            .then((result) => {
                                console.log(result)
                            })
                    })

                    clearInterval(time);
                }, 120000)
            })
    })
    .catch(err => {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    });

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