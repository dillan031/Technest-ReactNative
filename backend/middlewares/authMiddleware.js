const jwt = require('jsonwebtoken');
const User = require('../models/User'); 
require('dotenv').config(); 

/**
 * @desc    Middleware para proteger rutas privadas
 * Verifica la presencia y validez de un token JWT en el encabezado de la solicitud.
 * Si es válido, adjunta la información del usuario a 'req.user' y pasa al siguiente middleware/controlador.
 */
const protect = async (req, res, next) => {
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            token = req.headers.authorization.split(' ')[1];
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = await User.findById(decoded.user.id).select('-password');
            next();
        } catch (error) {
            console.error(`Error de autenticación: ${error.message}`);

            res.status(401).json({ msg: 'No autorizado, token fallido o expirado' });
        }
    }
    if (!token) {
        res.status(401).json({ msg: 'No autorizado, no hay token' });
    }
};

module.exports = protect;
