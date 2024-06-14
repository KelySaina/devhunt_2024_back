const express = require('express');
const { addServiceCin} = require('../controllers/servicecinController');

const router = express.Router();

router.post('/add', addServiceCin);

module.exports = router;
