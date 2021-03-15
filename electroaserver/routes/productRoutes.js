const express = require('express');
const productController = require('../controllers/productController');

const router = express.Router({ mergeParams: true })

router
    .route('/')
    .get(productController.getAllProducts)

module.exports = router;
