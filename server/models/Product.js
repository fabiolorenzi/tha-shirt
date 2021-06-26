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
    pusblished_date: {
        type: Date
    },
    update_date: {
        type: Date
    },
    image: {
        type: String,
        required: true
    }
});

module.exports = Product = mongoose.model("product", ProductSchema);