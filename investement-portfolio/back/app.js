'use strict';
const express = require('express');
const path = require('path');
var app = express();


//Asigno front
app.use(express.static(path.resolve(__dirname,'../front')));
//ROUTES
app.use(require('./routes/index.js'));


app.listen(3000,()=>{
    console.log(`Escucho el puerto ${3000}`);
});




