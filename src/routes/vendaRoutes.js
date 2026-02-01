const express = require('express');
const router = express.Router();
const vendaController = require('../controllers/vendaController');

router.post('/', vendaController.criar);
router.get('/', vendaController.listar);
router.get('/:id', vendaController.buscarPorId);

module.exports = router;
