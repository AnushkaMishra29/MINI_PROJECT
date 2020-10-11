const express = require('express');
const {body} = require('express-validator')
const router = express.Router();
const organization = require('../../controller/orginization/add_orginization')

router.post('/add-organization',[
    body('email').isEmail().normalizeEmail().withMessage('Enter Valid Email'),
    body('password').trim().not().isEmpty().matches("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})").withMessage('Choose Strong Password'),
    body('name').trim().not().isEmpty().withMessage('Name is Required'),
    body('contact_number').trim().matches("^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$").withMessage('Enter Correct Contact Number'),
    body('paytm_number').trim().matches("^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$").withMessage('Enter Correct Paytm Number')
],organization.register)
module.exports = router

