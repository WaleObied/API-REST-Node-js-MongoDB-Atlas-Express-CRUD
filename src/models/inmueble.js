const mongoose = require('mongoose');

const inmuebleSchema = mongoose.Schema({
    piso: {
        type: Number,
        required: true
    },
    letra: {
        type: String,
        required: true
    },
    extension: {
        type: Number,
        required: true
    },
    habitaciones: {
        type: Number,
        required: false
    },
    alquilado: {
        type: Boolean,
        required: true
    },
    propietario: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Inmueble', inmuebleSchema);