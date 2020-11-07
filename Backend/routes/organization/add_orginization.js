const express = require('express');
const {body} = require('express-validator')
const router = express.Router();
const organization = require('../../controller/orginization/add_orginization')

// router.post('/add-organization',[
//     body('email').isEmail().normalizeEmail().withMessage('Enter Valid Email'),
//     body('password').trim().not().isEmpty().matches("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})").withMessage('Choose Strong Password'),
//     body('name').trim().not().isEmpty().withMessage('Name is Required'),
//     body('image').trim().not().isEmpty().withMessage("Organization's Image is Required"),
//     body('address').trim().not().isEmpty().withMessage("Organization's address is Required"),
//     body('location').trim().not().isEmpty().withMessage("Organization's location is Required"),
//     body('head_image').trim().not().isEmpty().withMessage("Organization's Head's Image is Required"),
//     body('head_name').trim().not().isEmpty().withMessage("Organization's Head's Name is Required"),
//     body('contact_number').trim().not().isEmpty().matches("").withMessage("Organization's Contact number is Required"),
//     body('description').trim().not().isEmpty().withMessage("Organization's Description  is Required"),
// ],organization.register)
router.get('/get-orginization',organization.get)

module.exports = router

