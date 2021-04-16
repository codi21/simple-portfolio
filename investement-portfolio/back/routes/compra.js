const express = require('express');
const app = express();
const Compra = require('../models/compra.models.js');
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/compra',(req,res) => {
   Compra.find({})
    .exec((err,compraDB)=>{
        if (err) throw err;
        res.json({
            ok : true,
            compraDB
        });
    });
});
app.post('/compra',(req,res) => {
    let body = req.body;
    console.log(typeof(body));
    console.log(body.fecha);
    
    const compra = new Compra({
        fecha : body.fecha,
        denominacion : body.denominacion,
        inversion : body.inversion ,
        precioCompra : body.precioCompra
    });
    compra.save((err,compraDB)=>{
        if (err){
            return res.status(500).json({
                ok : false,
                err
            });
        }
        if(!compraDB){
            return res.status(500).json({
                ok : false,
                err
            });
        }
        console.log(compraDB);
        res.json({
            ok : true ,
            compraFront : compraDB
        });
    })
});
module.exports = app;
