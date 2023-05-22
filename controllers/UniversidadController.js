const Universidad = require('../models/moduleUniversidad');
const {request,response} = require=('express');



// crear
const createUniversidad = async (req = request, 
    res = response) => {
    try{
        const nombre = req.body.nombre 
            ? req.body.nombre.toUpperCase()
            : ''
            const direccion = req.body.direccion
            const telefono = req.body.telefono
        const UniversidadDB = await Universidad.findOne({nombre})
        
        if(UniversidadDB){
            return res.status(400).json({msg: 'Ya existe'})
        }
        const data = {
            nombre,
            direccion,
            telefono  
        }
        const universidad = new Universidad (data)
        console.log(universidad)
        await universidad.save()
        return res.status(201).json(universidad)
    }catch(e){
        return res.status(500).json({
            msg: 'Error general ' + e
        })
    }
}


//Listar
const getUniversidad = async (req = request, 
    res = response) => {
        try{
            
            const universidadDB = await Universidad.find({})
            return res.json(universidadDB)
        }catch(e){
            return res.status(500).json({
                msg: 'Error general ' + e
            })
        }
}


//Actualizar
const updateUniversidad = async (req = request,
    res = response) => {
    try{
        console.log(req.body)
        console.log(req.params)
        const data = req.body
        const id = req.params.id
       
        data.fechaActualizacion = new Date()
        console.log(data)
        const tipoUniversidad = await Universidad.findByIdAndUpdate(id, data, {new: true})
        return res.json(tipoUniversidad)
    }catch(e){
        console.log(e)
        return res.status(500).json({msg: e})  
    }
}

module.exports = { 
    createUniversidad, 
    getUniversidad, 
    updateUniversidad
}
