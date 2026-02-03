const { Estoque, Produto } = require('../models');

// Criar ou atualizar estoque
exports.definir = async (req, res) => {
  const { produtoId, quantidade } = req.body;

  const produto = await Produto.findByPk(produtoId);
  if (!produto) {
    return res.status(404).json({
      erro: 'Produto não encontrado'
    });
  }

  let estoque = await Estoque.findOne({
    where: { ProdutoId: produtoId }
  });

  if (estoque) {
    estoque.quantidade = quantidade;
    await estoque.save();
    return res.json(estoque);
  }

  const novo = await Estoque.create({
    ProdutoId: produtoId,
    quantidade
  });

  res.status(201).json(novo);
};

// Consultar estoque
exports.listar = async (req, res) => {
  const estoque = await Estoque.findAll({
    include: Produto
  });
  res.json(estoque);
};
