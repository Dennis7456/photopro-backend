const express = require('express');
const auth = require('../auth/auth');

const photoController = require("../controllers/photoController")

const router = express.Router();

router.post('/create_photo', auth, photoController.photo_create_photo);
router.get('/album_photos/:album_id', auth, photoController.photo_filter_photos);
module.exports = router;