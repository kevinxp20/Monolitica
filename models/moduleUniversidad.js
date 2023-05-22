const {Schema, model}= require('mongoose');

const Etapaschema = Schema({
    nombre: {
        type: String,
        required: [true, 'Nombre requerido']
    },

    direccion:{
        type: String,
        required:[true, 'Direccion requerida']
    },

    telefono:{
        type: String,
        required:[true, 'Telefono requerida']
    },

    fechaCreacion: {
        type: Date,
        default: new Date()
    },
    fechaActualizacion: {
        type: Date,
        default: new Date()
    }
})

module.exports = model('Etapas', Etapaschema);