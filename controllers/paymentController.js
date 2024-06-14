const { createPayment, getPaymentById, getPaymentsByUserId } = require('../models/paymentModel');

const addPayment = async (req, res) => {
    const { userId, serviceId, amount, paymentMethod, status } = req.body;

    try {
        const payment = await createPayment(userId, serviceId, amount, paymentMethod, status);
        res.status(201).json({ message: 'Payment created successfully', payment });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getPayment = async (req, res) => {
    const { id } = req.params;

    try {
        const payment = await getPaymentById(id);
        res.status(200).json(payment);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const listPaymentsByUser = async (req, res) => {
    const { userId } = req.params;

    try {
        const payments = await getPaymentsByUserId(userId);
        res.status(200).json(payments);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = { addPayment, getPayment, listPaymentsByUser };
