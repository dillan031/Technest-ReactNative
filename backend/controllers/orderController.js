const Order = require('../models/Order');
const Product = require('../models/Product');
const User = require('../models/User'); 

/**
 * @desc    Crear un nuevo pedido
 * @route   POST /api/orders
 * @access  Private
 */
const createOrder = async (req, res) => {
    const {
        orderItems,
        shippingAddress,
        paymentMethod,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice,
    } = req.body;

    try {
        if (orderItems && orderItems.length === 0) {
            return res.status(400).json({ msg: 'No hay artículos en el pedido' });
        }
        for (const item of orderItems) {
            const product = await Product.findById(item.product);

            if (!product) {
                return res.status(404).json({ msg: `Producto con ID ${item.product} no encontrado` });
            }

            if (product.countInStock < item.quantity) {
                return res.status(400).json({ msg: `Stock insuficiente para ${product.name}. Disponible: ${product.countInStock}` });
            }
            product.countInStock -= item.quantity;
            await product.save();
        }
        const newOrder = new Order({
            user: req.user.id, 
            orderItems,
            shippingAddress,
            paymentMethod,
            itemsPrice,
            taxPrice,
            shippingPrice,
            totalPrice,
        });
        const createdOrder = await newOrder.save();

        res.status(201).json(createdOrder);
    } catch (error) {
        console.error(`Error al crear el pedido: ${error.message}`);
        res.status(500).send('Error del Servidor');
    }
};

/**
 * @desc    Obtener todos los pedidos (para administradores) o pedidos del usuario autenticado
 * @route   GET /api/orders
 * @access  Private (Admin o Usuario)
 */
const getOrders = async (req, res) => {
    try {
        let orders;
        if (req.user && req.user.isAdmin) {
            orders = await Order.find({}).populate('user', 'id name email'); 
        } else {
            orders = await Order.find({ user: req.user.id }).populate('user', 'id name email');
        }

        res.json(orders);
    } catch (error) {
        console.error(`Error al obtener pedidos: ${error.message}`);
        res.status(500).send('Error del Servidor');
    }
};

/**
 * @desc    Obtener un pedido por ID
 * @route   GET /api/orders/:id
 * @access  Private (Solo el propietario del pedido o un administrador)
 */
const getOrderById = async (req, res) => {
    try {
        const order = await Order.findById(req.params.id)
            .populate('user', 'name email') 
            .populate('orderItems.product', 'name image price'); 

        if (!order) {
            return res.status(404).json({ msg: 'Pedido no encontrado' });
        }
        if (order.user._id.toString() !== req.user.id && (!req.user || !req.user.isAdmin)) {
            return res.status(403).json({ msg: 'No autorizado para ver este pedido' });
        }

        res.json(order);
    } catch (error) {
        console.error(`Error al obtener pedido por ID: ${error.message}`);
        if (error.kind === 'ObjectId') {
            return res.status(404).json({ msg: 'Pedido no encontrado' });
        }
        res.status(500).send('Error del Servidor');
    }
};

/**
 * @desc    Actualizar pedido a pagado
 * @route   PUT /api/orders/:id/pay
 * @access  Private
 */
const updateOrderToPaid = async (req, res) => {
    try {
        const order = await Order.findById(req.params.id);

        if (!order) {
            return res.status(404).json({ msg: 'Pedido no encontrado' });
        }
        order.isPaid = true;
        order.paidAt = Date.now();
        const updatedOrder = await order.save();
        res.json(updatedOrder);
    } catch (error) {
        console.error(`Error al actualizar pedido a pagado: ${error.message}`);
        res.status(500).send('Error del Servidor');
    }
};

/**
 * @desc    Actualizar pedido a entregado (solo para administradores)
 * @route   PUT /api/orders/:id/deliver
 * @access  Private/Admin
 */
const updateOrderToDelivered = async (req, res) => {
    try {
        const order = await Order.findById(req.params.id);

        if (!order) {
            return res.status(404).json({ msg: 'Pedido no encontrado' });
        }
        if (!order.isPaid) {
            return res.status(400).json({ msg: 'El pedido debe estar pagado antes de ser entregado' });
        }

        order.isDelivered = true;
        order.deliveredAt = Date.now();

        const updatedOrder = await order.save();
        res.json(updatedOrder);
    } catch (error) {
        console.error(`Error al actualizar pedido a entregado: ${error.message}`);
        res.status(500).send('Error del Servidor');
    }
};


module.exports = {
    createOrder,
    getOrders,
    getOrderById,
    updateOrderToPaid,
    updateOrderToDelivered,
};
