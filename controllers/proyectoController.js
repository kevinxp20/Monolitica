const Proyecto = require('../models/moduleProyecto');
const {request,response} = require=('express');



// crear
const createProyecto = async (req = request, 
    res = response) => {
    try{
        const numero = req.body.numero 
            ? req.body.numero.toUpperCase()
            : ''
        const tipoProyecto = req.body.tipoProyecto 
        const cliente = req.body.cliente 
        const universidad = req.body.universidad
        const etapa = req.body.etapa 
        const fechaIniciacion = req.body. fechaIniciacion
        const fechaEntrega = req.body.fechaEntrega   
        const titulo= req.body.titulo    
        
        const proyectoDB = await Proyecto.findOne({numero})
        
        if(proyectoDB){
            return res.status(400).json({msg: 'Ya existe'})
        }
        const data = {
            numero, 
            titulo,
            tipoProyecto,
            cliente,
            universidad,
            etapa,
            fechaIniciacion,
            fechaEntrega  

        }
        const proyecto = new Proyecto (data)
        console.log(proyecto)
        await proyecto .save()
        return res.status(201).json(proyecto )
    }catch(e){
        return res.status(500).json({
            msg: 'Error general ' + e
        })
    }
}


//Listar
const getProyecto = async (req = request, 
    res = response) => {
        try{
            const { nombre } = req.query
            const proyectoDB = await Proyecto.find({nombre})
            return res.json(proyectoDB)
        }catch(e){
            return res.status(500).json({
                msg: 'Error general ' + e
            })
        }
}


//Actualizar
const updateProyecto = async (req = request,
    res = response) => {
    try{
        console.log(req.body)
        console.log(req.params)
        const data = req.body
        const id = req.params.id
       
        data.fechaActualizacion = new Date()
        console.log(data)
        const tipoCliente = await Proyecto.findByIdAndUpdate(id, data, {new: true})
        return res.json(tipoCliente)
    }catch(e){
        console.log(e)
        return res.status(500).json({msg: e})  
    }
}

module.exports = { 
    createProyecto, 
    getProyecto, 
    updateProyecto
}