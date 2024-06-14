const { createServiceLibrary } = require('../model/servicelibraryModel');

const addServiceLibrary = async (req, res) => {
    const { user_id, title, author, isbn, genre } = req.body;

    try {
        const newBook = await createServiceLibrary(user_id, title, author, isbn, genre);
        res.status(201).json({ message: 'Library book added successfully', book: newBook });
    } catch (error) {
        console.error('Error adding library book', error);
        res.status(400).json({ error: error.message });
    }
};

module.exports = { addServiceLibrary };
