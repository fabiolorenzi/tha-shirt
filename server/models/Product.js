const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    underCategory: {
        type: String,
        required: true
    },
    colour: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    published_date: {
        type: Date,
        default: Date.now
    },
    update_date: {
        type: Date,
        default: Date.now
    },
    image: {
        type: String,
        required: true
    }
});

module.exports = Product = mongoose.model("product", ProductSchema);