const express = require('express');
const router = express.Router();
const {
    createOrder,
    getOrders,
    getOrderById,
    updateOrderToPaid,
    updateOrderToDelivered,
} = require('../controllers/orderController');

const auth = require('../middleware/authMiddleware');
router.use(auth);

// @route   POST /api/orders
// @desc    Crear un nuevo pedido
// @access  Privado
router.post('/', createOrder);

// @route   GET /api/orders
// @desc    Obtener todos los pedidos (para admin) o pedidos del usuario (para usuario)
// @access  Privado (Admin o Usuario)
router.get('/', getOrders);

// @route   GET /api/orders/:id
// @desc    Obtener un pedido específico por ID
// @access  Privado (Solo el propietario o un administrador)
router.get('/:id', getOrderById);

// @route   PUT /api/orders/:id/pay
// @desc    Actualizar el estado de un pedido a "pagado"
// @access  Privado
router.put('/:id/pay', updateOrderToPaid);

// @route   PUT /api/orders/:id/deliver
// @desc    Actualizar el estado de un pedido a "entregado" (solo para administradores)
// @access  Privado (Admin)
// Nota: Descomenta 'authorizeRoles' si quieres proteger esta ruta por rol
router.put('/:id/deliver', updateOrderToDelivered); 

module.exports = router;
