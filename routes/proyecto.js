const { Router } = require('express')
const { createProyecto, getProyecto, updateProyecto } = require('../controllers/proyectoController')

const router = Router()

router.get('/', getProyecto)
router.post('/', createProyecto)
router.put('/:id', updateProyecto )

module.exports = router;