const express = require('express');
const otpVerification =require('../controller/otp-verification')
const auth=require('../middleware/is_auth')
const router = express.Router();



router.post('/otpVerification',auth,otpVerification.otpcheck);
router.post('/resendotp',auth,otpVerification.resend);


module.exports = router