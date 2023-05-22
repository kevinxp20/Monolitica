const Etapas = require('../models/moduleProyecto');
const {request,response} = require=('express');



// crear
const createEtapas = async (req = request, 
    res = response) => {
    try{
        const nombre = req.body.nombre 
            ? req.body.nombre.toUpperCase()
            : ''
    
        const EtapasDB = await Etapas.findOne({nombre})
        
        if(EtapasDB){
            return res.status(400).json({msg: 'Ya existe'})
        }
        const data = {
            nombre  
        }
        const etapas = new Etapas (data)
        console.log(etapas)
        await etapas.save()
        return res.status(201).json(etapas)
    }catch(e){
        return res.status(500).json({
            msg: 'Error general ' + e
        })
    }
}


//Listar
const getEtapas = async (req = request, 
    res = response) => {
        try{
            const { nombre } = req.query
            const etapasDB = await Etapas.find({nombre})
            return res.json(etapasDB)
        }catch(e){
            return res.status(500).json({
                msg: 'Error general ' + e
            })
        }
}


//Actualizar
const updateEtapas = async (req = request,
    res = response) => {
    try{
        console.log(req.body)
        console.log(req.params)
        const data = req.body
        const id = req.params.id
       
        data.fechaActualizacion = new Date()
        console.log(data)
        const tipoEtapas = await Etapas.findByIdAndUpdate(id, data, {new: true})
        return res.json(tipoEtapas)
    }catch(e){
        console.log(e)
        return res.status(500).json({msg: e})  
    }
}

module.exports = { 
    createEtapas, 
    getEtapas, 
    updateEtapas
}