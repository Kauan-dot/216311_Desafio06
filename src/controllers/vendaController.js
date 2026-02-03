const { Venda, Cliente, Produto, Estoque } = require('../models');

exports.listarVendas = async (req, res) => {
  try {
    const vendas = await Venda.findAll({
      include: Cliente
    });
    res.json(vendas);
  } catch (error) {
    res.status(500).json({ erro: 'Erro ao listar vendas' });
  }
};

exports.buscarVendaPorId = async (req, res) => {
  try {
    const venda = await Venda.findByPk(req.params.id, {
      include: Cliente
    });

    if (!venda) {
      return res.status(404).json({ erro: 'Venda não encontrada' });
    }

    res.json(venda);
  } catch (error) {
    res.status(500).json({ erro: 'Erro ao buscar venda' });
  }
};

exports.criarVenda = async (req, res) => {
  try {
    const { clienteId, itens } = req.body;

    if (!clienteId || !Array.isArray(itens) || itens.length === 0) {
      return res.status(400).json({
        erro: 'clienteId e itens são obrigatórios'
      });
    }

    const cliente = await Cliente.findByPk(clienteId);
    if (!cliente) {
      return res.status(404).json({ erro: 'Cliente não encontrado' });
    }

    let total = 0;

    for (const item of itens) {
      const produto = await Produto.findByPk(item.produtoId);
      if (!produto) {
        return res.status(404).json({
          erro: `Produto ${item.produtoId} não encontrado`
        });
      }

      const estoque = await Estoque.findOne({
        where: { ProdutoId: produto.id }
      });

      if (!estoque || estoque.quantidade < item.quantidade) {
        return res.status(400).json({
          erro: `Estoque insuficiente para ${produto.nome}`
        });
      }

      estoque.quantidade -= item.quantidade;
      await estoque.save();

      total += produto.preco * item.quantidade;
    }

    const venda = await Venda.create({
      ClienteId: clienteId,
      total
    });

    res.status(201).json(venda);
  } catch (error) {
    res.status(500).json({ erro: 'Erro ao registrar venda' });
  }
};
