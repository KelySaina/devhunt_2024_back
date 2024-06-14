const { createUserService, deleteUserService } = require('../models/userserviceModel');

const addUserService = async (req, res) => {
    const { userId, serviceId } = req.body;

    try {
        const newUserService = await createUserService(userId, serviceId);
        res.status(201).json({ message: 'User service created successfully', userService: newUserService });
    } catch (error) {
        console.error('Error creating user service', error);
        res.status(400).json({ error: error.message });
    }
};

const removeUserService = async (req, res) => {
    const { userServiceId } = req.params;

    try {
        const deletedUserService = await deleteUserService(userServiceId);
        res.status(200).json({ message: 'User service deleted successfully', deletedUserService });
    } catch (error) {
        console.error('Error deleting user service', error);
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
    addUserService,
    removeUserService
};
