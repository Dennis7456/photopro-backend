const express = require('express');

const freeController = require('../controllers/freeController');

const router = express.Router();

// free endpoint
router.post("/free-endpoint", freeController.free);
module.exports = router;
