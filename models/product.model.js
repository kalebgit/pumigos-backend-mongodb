const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: false
    },
    price: {
        type: Number,
        required: true,
        min: .1,
    },
    thumbnail: {
        type: String,
        required: false,
    },
    code: {
        type: String,
        required: true,
        lowercase: true
    },
    stock: {
        type: Number,
        required: true,
        default: 1,

    }
});

const Product = mongoose.model("Product", productSchema)

