const express = require('express');
const auth = require('../auth/auth');

const categoryController = require("../controllers/categoryController");

const router = express.Router();

router.post('/create_category', auth, categoryController.category_create_category);
router.get('/categories', auth, categoryController.getCategories);
router.get('/category/:name', auth, categoryController.getACategory);

module.exports = router;