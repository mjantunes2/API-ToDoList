const express = require("express");
const app = express();
const PORT = process.env.PORT;

// Conexão com o Banco
const sequelize = require("./src/database/connection.js");

// Ler e enviar JSON na req e res
app.use(express.json());

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
