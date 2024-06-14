const express = require('express');
const { addPayment, getPayment, listPaymentsByUser } = require('../controllers/paymentController');

const router = express.Router();

router.post('/add', addPayment);
router.get('/:id', getPayment);
router.get('/user/:userId', listPaymentsByUser);

module.exports = router;
