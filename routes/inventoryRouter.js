const express = require('express');
const router = express.Router();

const inventoryItem = require('../models/inventoryModel');
const inventoryItemController = require('../controllers/inventoryController');

//router params
router.param('id', async (req, res, next, id) => {
    const inventoryItemId = Number(id);
    const inventoryItem = await inventoryItem.findById(inventoryItemId);
    if(inventoryItem) {
        req.InventoryItemId = id;
        next();
    } else {
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