const express = require('express');
const { addRequest, getRequest, listRequestsByUser } = require('../controllers/requestController');

const router = express.Router();

router.post('/add', addRequest);
router.get('/:id', getRequest);
router.get('/user/:userId', listRequestsByUser);

module.exports = router;
