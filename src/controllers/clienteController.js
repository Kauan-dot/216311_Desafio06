const { Cliente } = require('../models');

// CREATE
exports.criar = async (req, res) => {
  try {
    const { nome, email, telefone } = req.body;

    if (!nome || !email) {
      return res.status(400).json({
        erro: 'Nome e email são obrigatórios'
      });
    }

    const cliente = await Cliente.create({
      nome,
      email,
      telefone
    });

    res.status(201).json(cliente);
  } catch (error) {
    res.status(500).json({
      erro: 'Erro ao criar cliente'
    });
  }
};

// READ ALL
exports.listar = async (req, res) => {
  try {
    const clientes = await Cliente.findAll();
    res.json(clientes);
  } catch (error) {
    res.status(500).json({
      erro: 'Erro ao listar clientes'
    });
  }
};

// READ BY ID
exports.buscarPorId = async (req, res) => {
  try {
    const cliente = await Cliente.findByPk(req.params.id);

    if (!cliente) {
      return res.status(404).json({
        erro: 'Cliente não encontrado'
      });
    }

    res.json(cliente);
  } catch (error) {
    res.status(500).json({
      erro: 'Erro ao buscar cliente'
    });
  }
};
