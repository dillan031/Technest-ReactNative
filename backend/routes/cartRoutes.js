const express = require('express');
const router = express.Router();

const {
    getCart,
    addItemToCart,
    updateCartItemQuantity,
    removeItemFromCart,
    clearCart,
} = require('../controllers/cartController');
const auth = require('../middleware/authMiddleware');
router.use(auth);

// @route   GET /api/cart
// @desc    Obtener el carrito del usuario autenticado
// @access  Privado
router.get('/', getCart);

// @route   POST /api/cart
// @desc    Agregar un producto al carrito o actualizar su cantidad
// @access  Privado
router.post('/', addItemToCart);

// @route   PUT /api/cart/:productId
// @desc    Actualizar la cantidad de un producto específico en el carrito
// @access  Privado
router.put('/:productId', updateCartItemQuantity);

// @route   DELETE /api/cart/:productId
// @desc    Eliminar un producto específico del carrito
// @access  Privado
router.delete('/:productId', removeItemFromCart);

// @route   DELETE /api/cart/clear
// @desc    Vaciar todo el carrito del usuario
// @access  Privado
router.delete('/clear', clearCart);

module.exports = router;
