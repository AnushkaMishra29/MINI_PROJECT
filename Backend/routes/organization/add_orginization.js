const express = require('express');
const router = express.Router();
const organization = require('../../controller/orginization/add_orginization')

router.post('/organization',organization.register)


module.exports = router