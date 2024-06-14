const express = require('express');
const { addLog, listLogs } = require('../controllers/logController');

const router = express.Router();

router.post('/add', addLog);
router.get('/user/:userId', listLogs);

module.exports = router;
