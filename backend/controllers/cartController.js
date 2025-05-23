const Cart = require('../models/Cart');
const Product = require('../models/Product');

/**
 * @desc    Obtener el carrito del usuario autenticado
 * @route   GET /api/cart
 * @access  Private
 */
const getCart = async (req, res) => {
    try {
        const cart = await Cart.findOne({ user: req.user.id }).populate('items.product', 'name price image');
        if (!cart) {
            return res.status(200).json({ user: req.user.id, items: [] });
        }

        res.json(cart);
    } catch (error) {
        console.error(`Error al obtener el carrito: ${error.message}`);
        res.status(500).send('Error del Servidor');
    }
};

/**
 * @desc    Agregar un producto al carrito o actualizar su cantidad
 * @route   POST /api/cart
 * @access  Private
 */
const addItemToCart = async (req, res) => {
    const { productId, quantity } = req.body;

    try {
        const product = await Product.findById(productId);
        if (!product) {
            return res.status(404).json({ msg: 'Producto no encontrado' });
        }
        let cart = await Cart.findOne({ user: req.user.id });
        if (!cart) {
            cart = new Cart({
                user: req.user.id,
                items: [],
            });
        }
        const itemIndex = cart.items.findIndex(
            (item) => item.product.toString() === productId
        );

        if (itemIndex > -1) {
            cart.items[itemIndex].quantity += quantity;
        } else {
            cart.items.push({
                product: productId,
                quantity: quantity,
                price: product.price, 
            });
        }
        await cart.save();
        const updatedCart = await Cart.findById(cart._id).populate('items.product', 'name price image');
        res.status(200).json(updatedCart);
    } catch (error) {
        console.error(`Error al agregar/actualizar producto en el carrito: ${error.message}`);
        res.status(500).send('Error del Servidor');
    }
};

/**
 * @desc    Actualizar la cantidad de un producto en el carrito
 * @route   PUT /api/cart/:productId
 * @access  Private
 */
const updateCartItemQuantity = async (req, res) => {
    const { quantity } = req.body;
    const { productId } = req.params;

    try {
        let cart = await Cart.findOne({ user: req.user.id });

        if (!cart) {
            return res.status(404).json({ msg: 'Carrito no encontrado' });
        }

        const itemIndex = cart.items.findIndex(
            (item) => item.product.toString() === productId
        );

        if (itemIndex > -1) {
            cart.items[itemIndex].quantity = quantity;
            if (cart.items[itemIndex].quantity <= 0) {
                cart.items.splice(itemIndex, 1);
            }
        } else {
            return res.status(404).json({ msg: 'Producto no encontrado en el carrito' });
        }

        await cart.save();
        const updatedCart = await Cart.findById(cart._id).populate('items.product', 'name price image');
        res.json(updatedCart);
    } catch (error) {
        console.error(`Error al actualizar la cantidad del producto en el carrito: ${error.message}`);
        res.status(500).send('Error del Servidor');
    }
};

/**
 * @desc    Eliminar un producto del carrito
 * @route   DELETE /api/cart/:productId
 * @access  Private
 */
const removeItemFromCart = async (req, res) => {
    const { productId } = req.params;

    try {
        let cart = await Cart.findOne({ user: req.user.id });

        if (!cart) {
            return res.status(404).json({ msg: 'Carrito no encontrado' });
        }
        const initialLength = cart.items.length;
        cart.items = cart.items.filter(
            (item) => item.product.toString() !== productId
        );
        if (cart.items.length === initialLength) {
            return res.status(404).json({ msg: 'Producto no encontrado en el carrito' });
        }

        await cart.save();
        const updatedCart = await Cart.findById(cart._id).populate('items.product', 'name price image');
        res.json(updatedCart);
    } catch (error) {
        console.error(`Error al eliminar producto del carrito: ${error.message}`);
        res.status(500).send('Error del Servidor');
    }
};

/**
 * @desc    Vaciar todo el carrito del usuario
 * @route   DELETE /api/cart/clear
 * @access  Private
 */
const clearCart = async (req, res) => {
    try {
        let cart = await Cart.findOne({ user: req.user.id });

        if (cart) {
            cart.items = []; 
            await cart.save();
        } else {

            return res.status(200).json({ msg: 'El carrito ya está vacío o no existe.' });
        }

        res.json({ msg: 'Carrito vaciado con éxito' });
    } catch (error) {
        console.error(`Error al vaciar el carrito: ${error.message}`);
        res.status(500).send('Error del Servidor');
    }
};

module.exports = {
    getCart,
    addItemToCart,
    updateCartItemQuantity,
    removeItemFromCart,
    clearCart,
};
