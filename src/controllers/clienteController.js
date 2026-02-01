let clientes = [];
let nextId = 1;

// CREATE
exports.criar = (req, res) => {
  const { nome, email, telefone } = req.body;

  if (!nome || !email) {
    return res.status(400).json({
      erro: 'Nome e email são obrigatórios'
    });
  }

  const cliente = {
    id: nextId++,
    nome,
    email,
    telefone
  };

  clientes.push(cliente);

  res.status(201).json(cliente);
};

// READ ALL
exports.listar = (req, res) => {
  res.json(clientes);
};

// READ BY ID
exports.buscarPorId = (req, res) => {
  const id = Number(req.params.id);
  const cliente = clientes.find(c => c.id === id);

  if (!cliente) {
    return res.status(404).json({
      erro: 'Cliente não encontrado'
    });
  }

  res.json(cliente);
};
