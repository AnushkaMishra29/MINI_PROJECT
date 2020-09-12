const express = require('express');
const {body} = require('express-validator');

const contactUs=require('../controller/contact-us')

const router = express.Router();

router.post('/contact_us',contactUs.contactUs);



module.exports = router