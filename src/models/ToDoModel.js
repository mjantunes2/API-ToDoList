const sequelize = require("../database/connection.js");
const { DataTypes } = require("sequelize");

const ToDoModel = sequelize.define("ToDo", {
  atividade: {
    type: DataTypes.STRING,
    required: true,
  },

  descricao: {
    type: DataTypes.STRING,
  },

  feito: {
    type: DataTypes.STRING,
  },
});

module.exports = ToDoModel;
