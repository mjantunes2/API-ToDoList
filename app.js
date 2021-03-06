require("dotenv-safe").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT;
const cors = require('cors');

app.use(cors());

// Ler e enviar JSON na req e res
app.use(express.json());

// Conexão com o Banco
const sequelize = require("./src/database/connection.js");

// Models
const Models = require("./src/models/ToDoModel.js");

// Router
const ToDoRotas = require("./src/routes/ToDoRotas.js");

// Rotas
app.get('/', (req, res) => {
  res.json({message: "API ToDoList Murilo Antunes"});
})
app.use('/atividade', ToDoRotas);

// Teste
/*app.get("/teste", (req, res) => {
  res.status(200).json({ mensagem: "Servidor funcionou" });
});*/

// Sincronização com o banco
async function sync() {
  try {
    await sequelize.sync();
    app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
  } catch (error) {
    console.log(`Houve um erro ao sincronizar com o banco: ${error}`);
  }
}

sync();

module.exports = app;
