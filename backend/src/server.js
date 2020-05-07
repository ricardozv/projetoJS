const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes');

const server = express();

mongoose.connect('mongodb+srv://zumb:zumb@mosy-1lc4v.mongodb.net/confesso?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true

})

server.use(express.json());
server.use(routes);

server.listen(3333);