const express = require('express');
const router = express.Router();
const estoqueController = require('../controllers/estoqueController');

router.post('/', estoqueController.definir);
router.get('/', estoqueController.listar);

module.exports = router;
