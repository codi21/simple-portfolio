const mongoose = require('mongoose');
const { Schema } = mongoose;

//Defino el modelo de la clase compra
//ME falta añadir comprobaciones
//y agregar propiedades
const compraSchema = new Schema ({
    fecha : Date,
    denominacion : String,
    inversion : String,
    precioCompra : String
});

module.exports = mongoose.model('Compra',compraSchema);
