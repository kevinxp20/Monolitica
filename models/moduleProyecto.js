const { Schema, model} = require('mongoose')

const ProyectoSchema = Schema({
    numero: {
        type: String,
        required: [true, 'Numero requerido'],
        unique: [true, 'Proyecto creado']
    },
    titulo: {
        type: String,
        required: [true, 'titulo requerido']
    },
    tipoProyecto: {
        type: String,
        required: [true, 'tipoProyecto requierida'],
    },
    cliente: {
        type: String,
        required: [true, 'Cliente requierida'],
    },
    universidad:{
        type: String,
        required: [true, 'Universidad requierida'],
    },
    etapa:{
        type: String,
        required: [true, 'Etapa requerida'],
    },
    fechaIniciacion: {
        type: String,
        required: [true, 'Fecha de Iniciacion requerida'],
    },
    fechaEntrega: {
        type: String,
        required: [true, 'Fecha de Entrega requerida'],
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

module.exports = model('Proyecto', ProyectoSchema)
