// routes/productRoutes.js
const express = require('express');

const router = express.Router();
const productController = require('../controllers/productController');

router.get('/products', productController.getAllProducts); // используем функцию из импортированного объекта

module.exports = router;
