const { Router } = require('express')
const { createEtapas, getEtapas, updateEtapas } = require('../controllers/etapasController')

const router = Router()

router.get('/', getEtapas)
router.post('/', createEtapas)
router.put('/:id', updateEtapas)

module.exports = router;