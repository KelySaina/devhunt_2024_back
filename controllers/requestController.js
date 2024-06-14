const { createRequest, getRequestById, getRequestsByUserId } = require('../models/requestModel');

const addRequest = async (req, res) => {
    const { userId, serviceId, status, details } = req.body;

    try {
        const request = await createRequest(userId, serviceId, status, details);
        res.status(201).json({ message: 'Request created successfully', request });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getRequest = async (req, res) => {
    const { id } = req.params;

    try {
        const request = await getRequestById(id);
        res.status(200).json(request);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const listRequestsByUser = async (req, res) => {
    const { userId } = req.params;

    try {
        const requests = await getRequestsByUserId(userId);
        res.status(200).json(requests);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = { addRequest, getRequest, listRequestsByUser };
