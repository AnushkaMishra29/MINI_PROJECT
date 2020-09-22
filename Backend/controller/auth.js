const user = require('../models/user');
const {
    validationResult
} = require('express-validator');
const otp = require('../models/otp')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const sendgridTransport = require('nodemailer-sendgrid-transport');
const transport = nodemailer.createTransport(sendgridTransport({
    auth: {
        api_key: process.env.API_KEY
    }
}))
require('dotenv').config();

exports.signup = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const error = new Error('Validation failed');
        error.statusCode = 422;
        error.data = errors.array();
        throw error;
    }
    const email = req.body.email;
    const name = req.body.name;
    const password = req.body.password;
    const strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})");
    if (!strongRegex.test(req.body.password)) {
        const error = new Error('Enter Strong password');
        error.statusCode = 422;
        error.data = errors.array();
        throw error;
    }

    bcrypt.hash(password, 12).then(
            hashpw => {
                const User = new user({
                    email: email,
                    password: hashpw,
                    name: name,
                    verified: false
                });
                return User.save();
            }
        ).then(result => {
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
            const otps = new otp({
                otp: OTP,
                userId: result._id.toString()
            })
            otps.save().then((result) => {
                transport.sendMail({
                        to: req.body.email,
                        from: 'kavikmr9@gmail.com',
                        subject: 'OTP',
                        html: '<p>your otp is' + result.otp + '</p>'

                    })
                    .then(() => {
                        res.status(201).json({
                            name: 'Arnav'
                        });
                    })
                    .catch(error => {
                        console.log(error)
                    })
            })
        })
       .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};

exports.login = (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    let loadedUser;
    user.findOne({
            email: email
        })
        .then(user => {

            if (!user) {
                const error = new Error('A user with this email could not be found');
                error.statusCode = 401;
                throw error;
            }
            if(!user.verified)
            {
                const error = new Error('Please Verify Yourself First');
                error.statusCode = 401;
                throw error;
            }

            loadedUser = user;
            return bcrypt.compare(password, user.password);
        })
        .then(isEqual => {
            if (!isEqual) {
                const error = new Error('Wrong password');
                error.statusCode = 401;
                throw error;
            }
            const token = jwt.sign({
                email: loadedUser.email,
                userId: loadedUser._id.toString()
            }, "somesuperdoopersecret", {
                expiresIn: '24h'
            });
            res.status(200).json({
                token: token,
                user: loadedUser
            })
        })

        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        })
}