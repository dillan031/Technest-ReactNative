const Product = require('../models/Product');

/**
 * @desc    Obtener todos los productos
 * @route   GET /api/products
 * @access  Public
 */
const getProducts = async (req, res) => {
    try {
        const products = await Product.find({}); 
        res.json(products);
    } catch (error) {
        console.error(`Error al obtener productos: ${error.message}`);
        res.status(500).send('Error del Servidor');
    }
};

/**
 * @desc    Obtener un solo producto por ID
 * @route   GET /api/products/:id
 * @access  Public
 */
const getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ msg: 'Producto no encontrado' });
        }
        res.json(product);
    } catch (error) {
        console.error(`Error al obtener producto por ID: ${error.message}`);
        if (error.kind === 'ObjectId') {
            return res.status(404).json({ msg: 'Producto no encontrado' });
        }
        res.status(500).send('Error del Servidor');
    }
};

/**
 * @desc    Agregar un nuevo producto
 * @route   POST /api/products
 * @access  Private (Admin) - Requiere autenticación y posiblemente verificación de rol
 */
const addProduct = async (req, res) => {
    
    const { name, description, price, image, category, countInStock } = req.body;

    try {
        const newProduct = new Product({
            name,
            description,
            price,
            image,
            category,
            countInStock,
        });
        const product = await newProduct.save();
        res.status(201).json(product);
    } catch (error) {
        console.error(`Error al agregar producto: ${error.message}`);
        if (error.name === 'ValidationError') {
            return res.status(400).json({ msg: error.message });
        }
        res.status(500).send('Error del Servidor');
    }
};

/**
 * @desc    Actualizar un producto existente
 * @route   PUT /api/products/:id
 * @access  Private (Admin) - Requiere autenticación y posiblemente verificación de rol
 */
const updateProduct = async (req, res) => {
    const { name, description, price, image, category, countInStock } = req.body;

    const productFields = {};
    if (name) productFields.name = name;
    if (description) productFields.description = description;
    if (price) productFields.price = price;
    if (image) productFields.image = image;
    if (category) productFields.category = category;
    if (countInStock) productFields.countInStock = countInStock;

    try {
        let product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ msg: 'Producto no encontrado' });
        }
        product = await Product.findByIdAndUpdate(
            req.params.id,
            { $set: productFields }, 
            { new: true, runValidators: true } 
        );
        res.json(product);
    } catch (error) {
        console.error(`Error al actualizar producto: ${error.message}`);
        if (error.kind === 'ObjectId') {
            return res.status(404).json({ msg: 'Producto no encontrado' });
        }
        if (error.name === 'ValidationError') {
            return res.status(400).json({ msg: error.message });
        }
        res.status(500).send('Error del Servidor');
    }
};

/**
 * @desc    Eliminar un producto
 * @route   DELETE /api/products/:id
 * @access  Private (Admin) - Requiere autenticación y posiblemente verificación de rol
 */
const deleteProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);

        if (!product) {
            return res.status(404).json({ msg: 'Producto no encontrado' });
        }

        await product.deleteOne();

        res.json({ msg: 'Producto eliminado' });
    } catch (error) {
        console.error(`Error al eliminar producto: ${error.message}`);
        if (error.kind === 'ObjectId') {
            return res.status(404).json({ msg: 'Producto no encontrado' });
        }
        res.status(500).send('Error del Servidor');
    }
};

module.exports = {
    getProducts,
    getProductById,
    addProduct,
    updateProduct,
    deleteProduct,
};