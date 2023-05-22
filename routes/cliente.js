const { Router } = require('express')
const { createCliente, getCliente, updateCliente } = require('../controllers/clienteController')

const router = Router()

router.get('/', getCliente)
router.post('/', createCliente)
router.put('/:id', updateCliente )

module.exports = router;