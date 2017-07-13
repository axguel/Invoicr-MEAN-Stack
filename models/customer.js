const mongoose = require('mongoose');

const customerSchema = mongoose.Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    company: {
        type: String
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String
    },
    address: {
        street: String,
        city: String,
        state: String,
        zip: String
    },
    created_at: {
        type: Date,
        default:Date.now
    }

});

const Customer = module.exports = mongoose.model('Customer', customerSchema);

//Get Customers
module.exports.getCustomers = (callback, limit) => {
    Customer.find(callback).limit(limit).sort([['first_name', 'ascending']]);
}

//Get Customer
module.exports.getCustomerById = (id, callback) => {
    Customer.findById(id, callback);
}

//Add Customer
module.exports.addCustomer = (customer, callback) => {
    const add = {
        first_name: customer.first_name,
        last_name: customer.last_name,
        company: customer.company,
        email: customer.email,
        phone: customer.phone,
        address:{
            street: customer.address.street,
            city: customer.address.city,
            state: customer.address.state,
            zip: customer.address.zip
        }
    }
    Customer.create(add, callback);
}

//Update Customer
module.exports.updateCustomer = (id, customer, options, callback) => {
    const query = {_id:id};
    const update = {
        first_name: customer.first_name,
        last_name: customer.last_name,
        company: customer.company,
        email: customer.email,
        phone: customer.phone,
        address:{
            street: customer.address.street,
            city: customer.address.city,
            state: customer.address.state,
            zip: customer.address.zip
        }
    }
    Customer.findOneAndUpdate(query, update, options, callback);
}

//Remove Customer
module.exports.removeCustomer = (id, callback) => {
    const query = {_id:id};
    Customer.remove(query, callback);
}