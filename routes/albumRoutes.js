const express = require('express');
const auth = require('../auth/auth');
const albumController = require('../controllers/albumController');

const router = express.Router();

router.post('/create_album', auth, albumController.album_create_album);
router.get('/my_albums', auth, albumController.album_my_albums);
// router.patch('/update_album', albumController.album_update_album);
router.get('/albums/photos', albumController.getAllPhotos);
module.exports = router;
