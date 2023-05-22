const Cliente = require('../models/moduleCliente');
const {request,response} = require=('express');



// crear
const createCliente = async (req = request, 
    res = response) => {
    try{
        const nombre = req.body.nombre
        
            ? req.body.nombre.toUpperCase()
            : ''
        const email=req.body.email    
            
        const ClienteDB = await Cliente.findOne({nombre})
        
        if(ClienteDB){
            return res.status(400).json({msg: 'Ya existe'})
        }
        const data = {
            nombre,
            email
            
        }
        const cliente = new Cliente (data)
        console.log(cliente)
        await cliente.save()
        return res.status(201).json(cliente)
    }catch(e){
        return res.status(500).json({
            msg: 'Error general ' + e
        })
    }
}


//Listar
const getCliente = async (req = request, 
    res = response) => {
        try{
            
            const clienteDB = await Cliente.find()
            return res.json(clienteDB)
        }catch(e){
            return res.status(500).json({
                msg: 'Error general ' + e
            })
        }
}


//Actualizar
const updateCliente = async (req = request,
    res = response) => {
    try{
        console.log(req.body)
        console.log(req.params)
        const data = req.body
        const id = req.params.id
       
        data.fechaActualizacion = new Date()
        console.log(data)
        const tipoCliente = await Cliente.findByIdAndUpdate(id, data, {new: true})
        return res.json(tipoCliente)
    }catch(e){
        console.log(e)
        return res.status(500).json({msg: e})  
    }
}

module.exports = { 
    createCliente, 
    getCliente, 
    updateCliente
}
