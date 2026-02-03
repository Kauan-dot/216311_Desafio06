const { DataTypes } = require('sequelize');
const sequelize = require('../database/database');

const Cliente = sequelize.define('Cliente', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  telefone: DataTypes.STRING
});

module.exports = Cliente;
