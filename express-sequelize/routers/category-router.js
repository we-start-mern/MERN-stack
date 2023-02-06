const express = require('express')
const { body } = require('express-validator')
const { index, store, show } = require('../controllers/category-controller')
const router = express.Router()

router.get('/', index)
router.get('/:id', show)
router.post('/',
[
    body("name").notEmpty().withMessage("Name must not be empty")
    .isLength({min:3, max:10})
    .withMessage("Name must be between 3 - 10 charachters length")
],
store)

module.exports= router