const { Produto } = require('../models');

// CREATE
exports.criar = async (req, res) => {
  try {
    const { nome, descricao, preco, categoria } = req.body;

    if (!nome || preco == null) {
      return res.status(400).json({
        erro: 'Nome e preço são obrigatórios'
      });
    }

    const produto = await Produto.create({
      nome,
      descricao,
      preco,
      categoria
    });

    res.status(201).json(produto);
  } catch (error) {
    res.status(500).json({
      erro: 'Erro ao criar produto'
    });
  }
};

// READ ALL
exports.listar = async (req, res) => {
  const produtos = await Produto.findAll();
  res.json(produtos);
};

// READ BY ID
exports.buscarPorId = async (req, res) => {
  const produto = await Produto.findByPk(req.params.id);

  if (!produto) {
    return res.status(404).json({
      erro: 'Produto não encontrado'
    });
  }

  res.json(produto);
};

// UPDATE
exports.atualizar = async (req, res) => {
  const produto = await Produto.findByPk(req.params.id);

  if (!produto) {
    return res.status(404).json({
      erro: 'Produto não encontrado'
    });
  }

  const { nome, descricao, preco, categoria } = req.body;
  await produto.update({ nome, descricao, preco, categoria });

  res.json(produto);
};

// DELETE
exports.deletar = async (req, res) => {
  const produto = await Produto.findByPk(req.params.id);

  if (!produto) {
    return res.status(404).json({
      erro: 'Produto não encontrado'
    });
  }

  await produto.destroy();
  res.status(204).send();
};
