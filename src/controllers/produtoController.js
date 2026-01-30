exports.criar = (req, res) => {
  const { nome, preco } = req.body;

  if (!nome || !preco) {
    return res.status(400).json({
      erro: "Nome e preço são obrigatórios"
    });
  }

  res.status(201).json({
    mensagem: "Produto criado com sucesso",
    produto: { nome, preco }
  });
};

exports.listar = (req, res) => {
  res.json({ produtos: [] });
};
