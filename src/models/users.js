// models/User.js

const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Asegúrate de tener configurada tu instancia de Sequelize

const User = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  isAdmin: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});

module.exports = User;
