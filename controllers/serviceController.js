const { createService, getServiceById, getAllServices } = require('../models/serviceModel');

const addService = async (req, res) => {
    const { name, description, api_url } = req.body;

    try {
        const service = await createService(name, description, api_url);
        res.status(201).json({ message: 'Service created successfully', service });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getService = async (req, res) => {
    const { id } = req.params;

    try {
        const service = await getServiceById(id);
        res.status(200).json(service);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const listServices = async (req, res) => {
    try {
        const services = await getAllServices();
        res.status(200).json(services);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = { addService, getService, listServices };
