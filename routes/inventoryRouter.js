const express = require('express');
const router = express.Router();

const InventoryItem = require('../models/inventoryModel');
const inventoryItemController = require('../controllers/inventoryController');

//router params
router.param('id', async (req, res, next, id) => {
    try {
    const inventoryItem = await InventoryItem.findById(id);
    if(inventoryItem) {
        req.inventoryItemId = id;
        next();
    } 
    } catch (error) {
        console.log(error.message);
        res.status(404).send("Inventory item not found");
    }
});

//get all inventory items
router.get('/', inventoryItemController.fetchAllInventoryItems);
//get a specific inventory item
router.get('/:id', inventoryItemController.getInventoryItem);
//update a inventory item
router.put('/:id', inventoryItemController.updateInventoryItem);
//create a inventory item
router.post('/', inventoryItemController.createInventoryItem);
//delete a inventory item
router.delete('/:id', inventoryItemController.deleteInventoryItem);
//export 
module.exports = router;