const express = require('express');
const productController = require('../controllers/productController')

const router = express.Router({
    mergeParams: true
})

router
    .route('/')
    .get(productController.getAllProduct)
    .post(productController.createProduct)

router
    .route('/:slug')
    .put(productController.updateProduct)
    .get(productController.getProduct)


module.exports = router;