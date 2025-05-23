const express = require('express');
const router = express.Router();
const { registerUser, loginUser, getMe } = require('../controllers/authController');
const auth = require('../middleware/authMiddleware');

// @route   POST /api/auth/register
// @desc    Registrar un nuevo usuario
// @access  Público
router.post('/register', registerUser);

// @route   POST /api/auth/login
// @desc    Autenticar usuario y obtener token JWT
// @access  Público
router.post('/login', loginUser);

// @route   GET /api/auth/me
// @desc    Obtener los datos del usuario autenticado
// @access  Privado (requiere un token JWT válido)
router.get('/me', auth, getMe);

module.exports = router;
