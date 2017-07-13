const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//Mongoose Connect
mongoose.connect('mongodb://localhost/invoicr');
const db = mongoose.connection;

//init app
const app = express();
//port
const port = 3000;

//any domain can connect to this, it's a public api, accept requests with content-type
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//Client/Static Folder
app.use(express.static(__dirname+'/client'));

//Body Parser Middleware
app.use(bodyParser.json());

//route for the index
app.get('/', (req, res) => {
    res.send('Please use /api/customers or /api/invoices');
});

//Route Files
const customers = require('./routes/customers');
const invoices = require('./routes/invoices');

//Paths
app.use('/api/customers', customers);
app.use('/api/invoices', invoices);

app.listen(port, () =>{
    console.log('Server Started on Port' +port); 
});