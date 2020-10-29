const express = require('express');
const {body} = require('express-validator')
const router = express.Router();
const organization = require('../../controller/orginization/add_orginization')

router.post('/add-organization',[
    body('email').isEmail().normalizeEmail().withMessage('Enter Valid Email'),
    // body('password').trim().not().isEmpty().matches("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})").withMessage('Choose Strong Password'),
    body('name').trim().not().isEmpty().withMessage('Name is Required'),
],organization.register)
router.get('/get-orginization',organization.get)

module.exports = router

