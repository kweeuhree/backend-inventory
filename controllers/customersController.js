const Customer = require('../models/customersModel');

//get all customers
const fetchAllCustomers = async (req, res) => {
    const customers = await Customer.find();
    res.status(200).json({ customers: customers });
};

//get a specific customer
const getCustomer = async (req, res) => {
    const customer = await Customer.findById(req.customerId);
    res.status(200).json({ customer: customer });
};

//update a customer
const updateCustomer = async (req, res) => {
    const { firstName, lastName, email, phone, address, dateJoined } = req.body;
    const updatedCustomer = await Customer.findByIdAndUpdate(req.customerId, {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phone: phone,
        address: address,
        dateJoined: dateJoined
    }, { new: true }); //store updated value

    res.status(200).json({ updatedCustomer: updatedCustomer });
};

//create a customer
const createCustomer = async (req, res) => {
    const { firstName, lastName, email, phone, address, dateJoined } = req.body;
    const newCustomer = await Customer.create({ 
        firstName: firstName,
        lastName: lastName,
        email: email,
        phone: phone,
        address: address,
        dateJoined: dateJoined
    });

    res.status(201).json({ newCustomer: newCustomer });
};

//delete a customer
const deleteCustomer = async (req, res) => {
    await Customer.findByIdAndDelete(req.customerId);
    res.status(204).send();
};

module.exports = {
    fetchAllCustomers, getCustomer, updateCustomer, createCustomer, deleteCustomer
};