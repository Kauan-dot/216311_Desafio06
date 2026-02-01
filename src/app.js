const express = require('express');
const cors = require('cors');

const produtoRoutes = require('./routes/produtoRoutes');
const vendaRoutes = require('./routes/vendaRoutes');
const clienteRoutes = require('./routes/clienteRoutes');
const estoqueRoutes = require('./routes/estoqueRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/produtos', produtoRoutes);
app.use('/clientes', clienteRoutes);
app.use('/vendas', vendaRoutes);
app.use('/estoque', estoqueRoutes);

module.exports = app;
