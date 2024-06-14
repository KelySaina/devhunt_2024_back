const express = require('express');
const { addServiceLibrary} = require('../controller/servicelibraryController');

const router = express.Router();

router.post('/add', addServiceLibrary);

module.exports = router;
