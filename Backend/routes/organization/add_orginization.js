const express = require('express');
const router = express.Router();
const orginization = require('../../controller/orginization/add_orginization')

router.post('/orginization',orginization.register)


module.exports = router