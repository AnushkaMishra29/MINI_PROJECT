
const express = require('express');

const paytmController = require('../controller/paytm');

const router = express.Router();

router.get('/paytm',paytmController.paytm);

module.exports = router