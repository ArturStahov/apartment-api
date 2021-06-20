const express = require('express')
const controllersApartment = require('../../controllers/apartment.js')
const router = express.Router()
const { validateCreateApartment, validateUpdateApartment } = require('../../validation/apartment.js')
const guard = require('../../helpers/guard')


router.get('/all/',guard, controllersApartment.getAll)
router.get('/all/:id',guard, controllersApartment.getByID)
router.post('/myapartment/', guard, validateCreateApartment, controllersApartment.create)
router.get('/myapartment/', guard, controllersApartment.getAllMyApartment)
router.get('/myaprtment/:id', guard, controllersApartment.getByIDMy)
router.put('/myaprtment/:id', guard, validateUpdateApartment, controllersApartment.update)
router.patch('/myaprtment/:id', guard, validateUpdateApartment, controllersApartment.patch)
router.delete('/myaprtment/:id', guard, controllersApartment.remove)

module.exports = router