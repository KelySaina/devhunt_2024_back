const express = require('express');
const { addServiceTax} = require('../controller/servicetaxController');

const router = express.Router();

router.post('/add', addServiceTax);

module.exports = router;
