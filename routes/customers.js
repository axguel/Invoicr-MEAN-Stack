const express = require('express');
const router = express.Router();

Customer = require('../models/customer');

//Get All Customers
router.get('/', (req, res) => {
    Customer.getCustomers((err, customers) => {
        if(err){
            console.log(err);
            res.send(err);
        }
        res.json(customers);
    });
});

//Get Single Customer
router.get('/:id', (req, res) => {
    Customer.getCustomerById(req.params.id, (err, customer) => {
        if(err){
            console.log(err);
            res.send(err);
        }
        res.json(customer);
    });
});

//Add Customer
router.post('/', (req, res) => {
    const customer = req.body;
    Customer.addCustomer(customer, (err, customer) => {
        if(err){
            console.log(err);
            res.send(err);
        }
        res.json(customer);
    });
});

//Update Customer
router.put('/:id', (req, res) => {
    const id = req.params.id;
    const customer = req.body;

    Customer.updateCustomer(id, customer, {}, (err, customer) => {
        if(err){
            res.send(err);
        }
        res.json(customer);
    });
});

//Delete Customer
router.delete('/:id', (req, res) => {
    const id = req.params.id;
    Customer.removeCustomer(id, (err, customer) => {
        if(err){
            res.send(err);
        }
        res.json(customer);
    });
});


module.exports = router;