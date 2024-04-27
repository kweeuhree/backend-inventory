//require mongoose
const mongoose = require('mongoose');

//create schema
const customerSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String },
    address: {
        street: { type: String },
        city: { type: String },
        state: { type: String },
        postalCode: { type: String }
    },
    dateJoined: { type: Date, default: Date.now }
}, { timestamps: true });

//initialize a model
const Customer = mongoose.model("Customer", customerSchema);

//export
module.exports = Customer;



