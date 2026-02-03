const express = require('express');
const router = express.Router();

const vendaController = require('../controllers/vendaController');

// listar vendas
router.get('/', vendaController.listarVendas);

// buscar venda por id
router.get('/:id', vendaController.buscarVendaPorId);

// criar venda
router.post('/', vendaController.criarVenda);

module.exports = router; // 🔥 ESSENCIAL
