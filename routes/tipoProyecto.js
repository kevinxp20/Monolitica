const { Router } = require('express')
const { createTipoProyecto, getTipoProyecto, updateTipoProyecto } = require('../controllers/tipoProyectoController')

const router = Router()

router.get('/', getTipoProyecto)
router.post('/', createTipoProyecto)
router.put('/:id', updateTipoProyecto )

module.exports = router;