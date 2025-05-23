const express = require('express');
const router = express.Router();
const {
    getProducts,
    getProductById,
    addProduct,
    updateProduct,
    deleteProduct
} = require('../controllers/productController');
const auth = require('../middleware/authMiddleware');
// @route   GET /api/products
// @desc    Obtener todos los productos
// @access  Público
router.get('/', getProducts);

// @route   GET /api/products/:id
// @desc    Obtener un solo producto por ID
// @access  Público
router.get('/:id', getProductById);

// @route   POST /api/products
// @desc    Agregar un nuevo producto
// @access  Privado (Admin) - Requiere autenticación
// Nota: Descomenta 'auth' y 'authorizeRoles' si quieres proteger esta ruta
router.post('/', auth, addProduct); 

// @route   PUT /api/products/:id
// @desc    Actualizar un producto existente
// @access  Privado (Admin) - Requiere autenticación
// Nota: Descomenta 'auth' y 'authorizeRoles' si quieres proteger esta ruta
router.put('/:id', auth, updateProduct); 

// @route   DELETE /api/products/:id
// @desc    Eliminar un producto
// @access  Privado (Admin) - Requiere autenticación
// Nota: Descomenta 'auth' y 'authorizeRoles' si quieres proteger esta ruta
router.delete('/:id', auth, deleteProduct); 

module.exports = router;
