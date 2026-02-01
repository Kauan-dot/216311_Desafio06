const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteController');

router.post('/', clienteController.criar);
router.get('/', clienteController.listar);
router.get('/:id', clienteController.buscarPorId);

module.exports = router;
