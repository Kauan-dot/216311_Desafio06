let vendas = [];
let nextId = 1;

// CREATE
exports.criar = (req, res) => {
  const { clienteId, itens } = req.body;

  if (!clienteId || !Array.isArray(itens) || itens.length === 0) {
    return res.status(400).json({
      erro: 'clienteId e itens são obrigatórios'
    });
  }

  let total = 0;

  for (const item of itens) {
    if (!item.produtoId || !item.quantidade) {
      return res.status(400).json({
        erro: 'Cada item precisa de produtoId e quantidade'
      });
    }

    // valor mockado (sem banco ainda)
    total += item.quantidade * 10;
  }

  const venda = {
    id: nextId++,
    clienteId,
    itens,
    total,
    data: new Date()
  };

  vendas.push(venda);

  res.status(201).json(venda);
};

// READ ALL
exports.listar = (req, res) => {
  res.json(vendas);
};

// READ BY ID
exports.buscarPorId = (req, res) => {
  const id = Number(req.params.id);
  const venda = vendas.find(v => v.id === id);

  if (!venda) {
    return res.status(404).json({
      erro: 'Venda não encontrada'
    });
  }

  res.json(venda);
};
