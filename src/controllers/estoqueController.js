let estoque = [];

// Criar ou atualizar estoque de um produto
exports.definir = (req, res) => {
  const { produtoId, quantidade } = req.body;

  if (!produtoId || quantidade === undefined) {
    return res.status(400).json({
      erro: 'produtoId e quantidade são obrigatórios'
    });
  }

  let item = estoque.find(e => e.produtoId === produtoId);

  if (item) {
    item.quantidade = quantidade;
    return res.json(item);
  }

  const novoItem = {
    produtoId,
    quantidade
  };

  estoque.push(novoItem);
  res.status(201).json(novoItem);
};

// Entrada de estoque
exports.entrada = (req, res) => {
  const { produtoId, quantidade } = req.body;

  const item = estoque.find(e => e.produtoId === produtoId);

  if (!item) {
    return res.status(404).json({
      erro: 'Produto não encontrado no estoque'
    });
  }

  item.quantidade += quantidade;
  res.json(item);
};

// Saída de estoque
exports.saida = (req, res) => {
  const { produtoId, quantidade } = req.body;

  const item = estoque.find(e => e.produtoId === produtoId);

  if (!item) {
    return res.status(404).json({
      erro: 'Produto não encontrado no estoque'
    });
  }

  if (item.quantidade < quantidade) {
    return res.status(400).json({
      erro: 'Estoque insuficiente'
    });
  }

  item.quantidade -= quantidade;
  res.json(item);
};

// Consultar estoque
exports.listar = (req, res) => {
  res.json(estoque);
};
