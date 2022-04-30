const sequelize = require("../database/connection.js");
const { DataTypes } = require("sequelize");

const ToDoModel = sequelize.define("ToDo", {
  atividade: {
    type: DataTypes.STRING,
    required: true,
  },

  descricao: {
    type: DataTypes.STRING,
    required: true,
  },

  feito: {
    type: DataTypes.STRING,
    required: true,
  },
});

module.exports = ToDoModel;
