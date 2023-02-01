const express = require('express');
const auth = require('../auth/auth');
const usersController = require('../controllers/usersController');

const router = express.Router();

router.get('/profile', auth, usersController.profile);
router.get('/users', auth, usersController.users_index);
module.exports = router;