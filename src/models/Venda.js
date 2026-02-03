const { DataTypes } = require('sequelize');
const sequelize = require('../database/database');

const Venda = sequelize.define('Venda', {
  total: {
    type: DataTypes.FLOAT,
    allowNull: false
  }
});

module.exports = Venda;
