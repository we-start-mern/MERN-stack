const express = require('express');
const { index, show, store, update, destroy } = require('../controllers/user-controller');

const router = express.Router()

router.get('/',index);
router.get('/:id', show);
router.post('/', store);
router.put('/:id', update);
router.delete('/:id', destroy);

module.exports=router