const Order = require('../models/ordersModel');

//get all orders
const fetchAllOrders = async (req, res) => {
    const orders = await Order.find();
    res.status(200).json({ orders: orders });
};

//get a specific order
const getOrder = async (req, res) => {
    const order = await Order.findById(req.orderId);
    res.status(200).json({ order: order });
};

//update a order
const updateOrder = async (req, res) => {
    const { product, quantity, price, total, status, dateOrdered } = req.body;
    const updatedOrder = await Order.findByIdAndUpdate(req.orderId, {
        product: product,
        quantity: quantity,
        price: price,
        total:total,
        status: status,
        dateOrdered:dateOrdered
    }, { new: true }); //store updated value

    res.status(200).json({ updatedOrder: updatedOrder });
};

//create a order
const createOrder = async (req, res) => {
    const { product, quantity, price, total, status, dateOrdered } = req.body;
    const newOrder = await Order.create({
        product: product,
        quantity: quantity,
        price: price,
        status: status,
        dateOrdered:dateOrdered
    });

    res.status(201).json({ newOrder: newOrder });
};

//delete a order
const deleteOrder = async (req, res) => {
    await Order.findByIdAndDelete(req.orderId);
    res.status(204).send();
};

module.exports = {
    fetchAllOrders, getOrder, updateOrder, createOrder, deleteOrder
};