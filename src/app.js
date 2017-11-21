'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config');

const app = express();
const router = express.Router();

//Conecta ao BD
mongoose.connect(config.connectionString);

//Carrega Models
const Nodes = require('./models/nodes');
const Customer = require('./models/customer');

//Carrega Rotas
const indexRoute = require('./routes/index-route');
const nodeRoute = require('./routes/node-route');
const customerRoute = require('./routes/customer-route');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


app.use('/', indexRoute);
app.use('/nodes', nodeRoute);
app.use('/customers', customerRoute);


module.exports = app;
