const express = require('express');
const protectedController = require('../../controllers/protectedController')
const auth = require('../../auth/auth');

const router = express.Router();
  // authentication endpoint
router.get("/auth-endpoint", auth, protectedController.protected)

module.exports = router;