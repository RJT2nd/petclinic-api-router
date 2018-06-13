// app.js
var express = require('express');
var app = express();

// cors
var cors = require('cors');
app.use(cors());

// owners
var OwnerController = require('./owner/OwnerController.js');
app.use('/petclinic/api/owners', OwnerController);

module.exports = app;
