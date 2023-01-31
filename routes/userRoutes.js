const express = require('express');
const auth = require('../auth/auth');
const usersController = require('../controllers/usersController');

const router = express.Router();

router.get('/profile', auth, usersController.profile);
router.get('/user', auth, usersController.user_details);
module.exports = router;