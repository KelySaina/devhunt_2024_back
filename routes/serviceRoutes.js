const express = require('express');
const { addService, getService, listServices } = require('../controllers/serviceController');

const router = express.Router();

router.post('/add', addService);
router.get('/:id', getService);
router.get('/', listServices);

module.exports = router;
