const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { createUser, getUserByEmail, getAllUsers, getUserById } = require('../models/userModel');

const register = async (req, res) => {
    const { username, password, email, firstName, lastName, dateOfBirth } = req.body;

    try {
        const user = await createUser(username, password, email, firstName, lastName, dateOfBirth);
        const token = jwt.sign({ userId: user.user_id }, 'devhunt', { expiresIn: '3h' });
        res.json({ token: token, user: user });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await getUserByEmail(email);
        const isMatch = await bcrypt.compare(password, user.password_hash);

        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const token = jwt.sign({ userId: user.user_id }, 'devhunt', { expiresIn: '3h' });
        res.json({ token: token, user: user });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


const getAll = async (req, res) => {
    try {
        const users = await getAllUsers();
        res.json({ users });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


const getById = async (req, res) => {
    const userId = req.params.userId;

    try {
        const user = await getUserById(userId);
        res.json({ user });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


const update = async (req, res) => {
    const userId = req.params.userId;
    const updates = req.body;

    try {
        const updatedUser = await updateUser(userId, updates);
        res.json({ message: 'User updated successfully', user: updatedUser });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


const remove = async (req, res) => {
    const userId = req.params.userId;

    try {
        const deletedUser = await deleteUser(userId);
        res.json({ message: 'User deleted successfully', user: deletedUser });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = { register, login, getAll, getById, update, remove };
