'use strict';
const express = require('express');
const path = require('path');
const app = express();
const mongoose = require('mongoose');

//Configuro body parser para poder manejar mejor el body
app.use(express.json());
//Asigno front
app.use(express.static(path.resolve(__dirname,'../front')));
//ROUTES
app.use(require('./routes/index.js'));

//Base de datos
/// getting-started.js
mongoose.connect('mongodb://localhost:27017/CryptoCompra', {useNewUrlParser: true, useUnifiedTopology: true},(err,res)=>{
    if(err) throw err;
    console.log('Base de datos Online');
});



app.listen(3000,()=>{
    console.log(`Escucho el puerto ${3000}`);
});




