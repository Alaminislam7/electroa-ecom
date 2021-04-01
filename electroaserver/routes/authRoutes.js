const express = require('express');
const authController = require('../controllers/authController');

const router = express.Router({ mergeParams: true })

router
    .route('/users')
    .post(authController.registerController)

router
    .route('/users/login')
    .post(authController.loginUser)

module.exports = router