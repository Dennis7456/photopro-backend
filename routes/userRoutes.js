const express = require('express');
const auth = require('../auth/auth');
const usersController = require('../controllers/usersController');

const router = express.Router();

router.get('/profile', auth, usersController.profile);
router.get('/users', auth, usersController.users_index);
router.post('/edit_profile', auth, usersController.edit_profile);
router.post('/user', auth, usersController.get_user);
module.exports = router;