const express = require('express');
const router = express.Router();
const estoqueController = require('../controllers/estoqueController');

router.post('/', estoqueController.definir);
router.post('/entrada', estoqueController.entrada);
router.post('/saida', estoqueController.saida);
router.get('/', estoqueController.listar);

module.exports = router;
