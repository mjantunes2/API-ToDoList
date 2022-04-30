const request = require("supertest");
const ToDoModel = require("../models/ToDoModel.js");
const app = require("../../app.js");

describe("Criar Atividade", () => {
  it("Deve criar uma atividade", async () => {
    const response = await request(app).post("/atividade/create").send({
      atividade: "Teste",
      descricao: "ControllerCriaNovaAtividade",
      feito: "Concluído",
    });

    expect(response.statusCode).toBe(201);
    expect(response.body.message).toBe("Atividade criada com sucesso");
  });

  it("Não deve criar uma atividade com algum campo vazio", async () => {
    const response = await request(app).post("/atividade/create").send({
      Atividade: "Teste2",
      feito: "Concluído",
    });

    expect(response.statusCode).toBe(401);
    expect(response.body.message).toBe(
      "Todos os campos precisam ser preenchidos"
    );
  });
});
