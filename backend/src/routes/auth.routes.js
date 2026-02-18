const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');
const { validateLogin, validateRegister } = require('../middleware/validators');

// POST /api/auth/register
router.post('/register', validateRegister, authController.register);

// POST /api/auth/login
router.post('/login', validateLogin, authController.login);

// POST /api/auth/logout
router.post('/logout', authController.logout);

// POST /api/auth/refresh
router.post('/refresh', authController.refreshToken);

// GET /api/auth/me (protected)
router.get('/me', authController.getProfile);

module.exports = router;