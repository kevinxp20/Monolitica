const { Router } = require('express')
const {  createUniversidad, getUniversidad, updateUniversidad} = require('../controllers/UniversidadController')

const router = Router()

router.get('/', getUniversidad)
router.post('/', createUniversidad)
router.put('/:id', updateUniversidad )

module.exports = router;