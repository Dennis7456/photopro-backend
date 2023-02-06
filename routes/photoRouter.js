const express = require('express');
const auth = require('../auth/auth');

const photoController = require("../controllers/photoController")

const router = express.Router();

router.post('/create_photo', auth, photoController.photo_create_photo);
router.get('/album_photos/:album_id', auth, photoController.photo_filter_photos);
router.get('/photos', auth, photoController.getAllPhotos);
router.get('/photos/:category', auth, photoController.filterPhotos)
router.post('/photo', auth, photoController.photo_get_photo);
router.patch('/edit_photo', auth, photoController.photo_edit_photo);
module.exports = router;