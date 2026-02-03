const { DataTypes } = require('sequelize');
const sequelize = require('../database/database');

const Estoque = sequelize.define('Estoque', {
  quantidade: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

module.exports = Estoque;
