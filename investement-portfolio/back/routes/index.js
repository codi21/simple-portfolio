const express = require('express');
const app = express();

app.use(require('./home'));
app.use(require('./compra.js'));

module.exports = app;
