const express = require('express');
const { register, login, update , remove } = require('../controllers/userController');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.put('/:userId', update);
router.delete('/:userId', remove);

module.exports = router;
