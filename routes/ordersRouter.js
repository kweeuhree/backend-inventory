const express = require('express');
const router = express.Router();

const Order = require('../models/ordersModel');
const ordersController = require('../controllers/ordersController');

//router params
router.param('id', async (req, res, next, id) => {
    const orderId = Number(id);
    const order = await Order.findById(orderId);
    if(order) {
        req.orderId = id;
        next();
    } else {
        res.status(404).send("Order not found");
    }
});

//get all orders
router.get('/', ordersController.fetchAllOrders);

//get a specific order
router.get('/:id', ordersController.getOrder);

//update a order
router.put('/:id', ordersController.updateOrder);

//create a order
router.post('/', ordersController.createOrder);

//delete a order
router.delete('/:id', ordersController.deleteOrder);


//export 
module.exports = router;