const express = require('express');
const { addUserService, removeUserService } = require('../controllers/userserviceController');

const router = express.Router();

router.post('/add', addUserService);

router.delete('/:userServiceId', removeUserService);

module.exports = router;
