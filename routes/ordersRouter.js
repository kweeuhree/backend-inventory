const express = require('express');
const router = express.Router();

const Order = require('../models/ordersModel');
const ordersController = require('../controllers/ordersController');


// middleware to calculate order total
const calculateOrderTotal = (req, res, next) => {
    const quantity = req.body.quantity;
    const price = req.body.price;
    req.orderTotal = quantity * price;
    next();
};

//router params
router.param('id', async (req, res, next, id) => {
    try {  
    const order = await Order.findById(id);
    if(order) {
        req.orderId = id;
        next();
    } 
    } catch (error) {
        console.log(error.message);
        res.status(404).send("Order not found");
    }
});


//get all orders
router.get('/', ordersController.fetchAllOrders);

//get a specific order
router.get('/:id', ordersController.getOrder);

//update a order
router.put('/:id', calculateOrderTotal, ordersController.updateOrder);

//create a order
router.post('/', calculateOrderTotal, ordersController.createOrder);

//delete a order
router.delete('/:id', ordersController.deleteOrder);


//export 
module.exports = router;