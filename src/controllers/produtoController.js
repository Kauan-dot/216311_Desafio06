let produtos = [];
let nextId = 1;

// CREATE
exports.criar = (req, res) => {
  const { nome, descricao, preco, categoria } = req.body;

  if (!nome || preco == null) {
    return res.status(400).json({
      erro: 'Nome e preço são obrigatórios'
    });
  }

  const produto = {
    id: nextId++,
    nome,
    descricao,
    preco,
    categoria
  };

  produtos.push(produto);

  res.status(201).json(produto);
};

// READ ALL
exports.listar = (req, res) => {
  res.json(produtos);
};

// READ BY ID
exports.buscarPorId = (req, res) => {
  const id = Number(req.params.id);
  const produto = produtos.find(p => p.id === id);

  if (!produto) {
    return res.status(404).json({
      erro: 'Produto não encontrado'
    });
  }

  res.json(produto);
};

// UPDATE
exports.atualizar = (req, res) => {
  const id = Number(req.params.id);
  const produto = produtos.find(p => p.id === id);

  if (!produto) {
    return res.status(404).json({
      erro: 'Produto não encontrado'
    });
  }

  const { nome, descricao, preco, categoria } = req.body;

  if (nome !== undefined) produto.nome = nome;
  if (descricao !== undefined) produto.descricao = descricao;
  if (preco !== undefined) produto.preco = preco;
  if (categoria !== undefined) produto.categoria = categoria;

  res.json(produto);
};

// DELETE
exports.deletar = (req, res) => {
  const id = Number(req.params.id);
  const index = produtos.findIndex(p => p.id === id);

  if (index === -1) {
    return res.status(404).json({
      erro: 'Produto não encontrado'
    });
  }

  produtos.splice(index, 1);
  res.status(204).send();
};
