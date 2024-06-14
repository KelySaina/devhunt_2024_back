const express = require('express');
const { register, login, getAll, getById, update , remove } = require('../controllers/userController');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/', getAll); 
router.get('/:userId', getById);
router.put('/:userId', update);
router.delete('/:userId', remove);

module.exports = router;
