//require mongoose
const mongoose = require('mongoose');
//create schema
const inventoryItemSchema = new mongoose.Schema( {
    name: { type: String, required: true },
    description: { type: String },
    category: { type: String, required: true },
    quantity: { type: Number, required: true, min: 0 },
    price: { type: Number, required: true, min: 0 },
    supplier: {
        name: { type: String },
        contact: { type: String }
    }
});

//initialize a model
const InventoryItem = mongoose.model("InventoryItem", inventoryItemSchema);

//export
module.exports = InventoryItem;