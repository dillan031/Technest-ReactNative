const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true 
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        default: 0,
        min: 0 
    },
    image: {
        type: String,
        required: true 
    },
    category: {
        type: String,
        required: true,
        trim: true
    },
    countInStock: { 
        type: Number,
        required: true,
        default: 0,
        min: 0 
    },
    rating: { 
        type: Number,
        default: 0,
        min: 0,
        max: 5 
    },
    numReviews: { 
        type: Number,
        default: 0,
        min: 0
    },
}, {
    timestamps: true 
});

module.exports = mongoose.model('Product', ProductSchema);
