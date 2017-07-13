const mongoose = require('mongoose');

const invoiceSchema = mongoose.Schema({
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer'
    },
    service: {
        type: String,
        required: true
    },
    price: {
        type: String
    },
    due: {
        type: String
    },
    status: {
        type: String
    },
    created_at: {
        type: Date,
        default:Date.now
    }

});

const Invoice = module.exports = mongoose.model('Invoice', invoiceSchema);

//Get Invoices
module.exports.getInvoices = (callback, limit) => {
    Invoice.find(callback).limit(limit).sort([['created_at', 'ascending']]);
}

//Get Invoice by ID
module.exports.getInvoiceById = (customer_id, callback, limit) => {
    Invoice.findById(id, callback);
}

//Get Customer Invoices
module.exports.getCustomerInvoices = (customer_id, callback, limit) => {
    const query = {customer: customer_id};
    Invoice.find(query, callback).limit(limit).sort([['created_at', 'ascending']]);
}

//Add Invoice
module.exports.addInvoice = (invoice, callback) => {
    const add = {
        customer: invoice.customer,
        service: invoice.service,
        price: invoice.price,
        due: invoice.due,
        status: invoice.status
    }
    Invoice.create(add, callback);
}

//Update Customer
module.exports.updateInvoice = (id, invoice, options, callback) => {
    const query = {_id:id};

    const update = {
        service: invoice.service,
        price: invoice.price,
        due: invoice.due,
        status: invoice.status
    }
    Invoice.findOneAndUpdate(query, update, options, callback);
}

//Remove Customer
module.exports.removeInvoice = (id, callback) => {
    const query = {_id:id};
    Invoice.remove(query, callback);
}