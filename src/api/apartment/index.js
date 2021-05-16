const express = require('express')
const controllersApartment = require('../../controllers/apartment.js')
const router = express.Router()
const { validateCreateApartment, validateUpdateApartment } = require('../../validation/apartment.js')
const guard = require('../../helpers/guard')

router.get('/', guard, controllersApartment.getAll)
router.get('/:id', guard, controllersApartment.getByID)
router.post('/', guard, validateCreateApartment, controllersApartment.create)
router.put('/:id', guard, validateUpdateApartment, controllersApartment.update)
router.patch('/:id', guard, validateUpdateApartment, controllersApartment.patch)
router.delete('/:id', guard, controllersApartment.remove)

module.exports = router