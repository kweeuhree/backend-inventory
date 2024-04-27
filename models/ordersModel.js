//require mongoose
const mongoose = require('mongoose');
//create schema
const orderSchema = new mongoose.Schema({
    product: { type: String, required: true },
    quantity: { type: Number, required: true, min: 1 },
    price: { type: Number, required: true, min: 0 },
    total: { type: Number, required: true, min: 0 },
    status: { type: String, enum: ['Pending', 'Processing', 'Shipped', 'Delivered'], default: 'Pending' },
    dateOrdered: { type: Date, default: Date.now }
}, { timestamps: true });

//initialize a model
const Order = mongoose.model("Order", orderSchema);

//export
module.exports = Order;




