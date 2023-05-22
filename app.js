const express = require('express')
const app = express()
const cors = require('cors')


app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors({
    origin: '*'
}))

const tipoProyecto = require('./routes/tipoProyecto')
const proyecto = require('./routes/proyecto')
const cliente = require('./routes/cliente')
const universidad =require('./routes/Universidad')
const etapas= require('./routes/etapas')


app.use('/tipoproyectos', tipoProyecto)
app.use('/proyecto', proyecto)
app.use('/cliente', cliente)
app.use('/universidad', universidad)
app.use('/etapas', tipoProyecto)



module.exports = app