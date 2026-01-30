const express = require('express');
const router = express.Router();

const produtoController = require('../controllers/produtoController');

router.post('/', produtoController.criar);
router.get('/', produtoController.listar);

module.exports = router;
