const inventoryItem = require('../models/inventoryModel');

//get all inventory items
const fetchAllInventoryItems = async (req, res) => {
    const items = await inventoryItem.find();
    res.status(200).send({ inventoryItems: items});
};

//get a specific inventory item
const getInventoryItem = async (req, res) => {
    const item = await inventoryItem.findById(req.inventoryItemId);
    res.status(200).json({ inventoryItem: item });
};

//update a inventory item
const updateInventoryItem = async (req, res) => {
    const { name, description, category, quantity, price, supplier } = req.body;
    const updatedItem = await inventoryItem.findByIdAndUpdate( req.inventoryItemId, {
        name: name,
        description: description,
        category: category,
        price: price,
        supplier: supplier
    }, { new: true }); //store updated value

    res.status(200).json({ updatedItem: updatedItem });
};

//create a inventory item
const createInventoryItem = async (req, res) => {
    const { name, description, category, quantity, price, supplier } = req.body;
    const newItem = await inventoryItem.create({ 
        name: name,
        description: description,
        category: category,
        price: price,
        supplier: supplier
    });

    res.status(201).json({ newItem: newItem });
};

//delete a inventory item
const deleteInventoryItem = async (req, res) => {
    await inventoryItem.findByIdAndDelete(req.inventoryItemId);
    res.status(204).send();
};


module.exports = {
    fetchAllInventoryItems, getInventoryItem, updateInventoryItem, 
    createInventoryItem, deleteInventoryItem
};