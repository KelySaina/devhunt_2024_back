const express = require('express');
const { getData, addData, updateData, deleteData } = require('../controllers/dataController');

const router = express.Router();

router.get('/data', getData);
router.post('/data', addData);
router.put('/data/:id', updateData);
router.delete('/data/:id', deleteData);

module.exports = router;
