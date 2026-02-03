const app = require('./src/app');
const sequelize = require('./src/database/database');

sequelize.sync().then(() => {
  console.log('Banco de dados conectado');
  app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
  });
});
