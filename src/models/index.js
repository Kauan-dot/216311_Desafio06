const Produto = require('./Produto');
const Cliente = require('./Cliente');
const Venda = require('./Venda');
const Estoque = require('./Estoque');

// Relações
Cliente.hasMany(Venda);
Venda.belongsTo(Cliente);

Produto.hasOne(Estoque);
Estoque.belongsTo(Produto);

module.exports = {
  Produto,
  Cliente,
  Venda,
  Estoque
};
