const ToDoModel = require("../models/ToDoModel.js");

class ToDoController {
  static async showAll(req, res) {
    try {
      const toDo = await ToDoModel.findAll({
        attributes: { exclude: ["createdAt", "updateAt"] },
      });

      return res.status(200).json({ resultado: toDo });
    } catch (error) {
      return res.status(401).json({ status: 401, message: error.message });
    }
  }

  static async showById(req, res) {
    const { id } = req.params;

    try {
      const toDo = await ToDoModel.findByPk(id, {
        attributes: { exclude: ["createAt", "updateAt"] },
      });

      if (!toDo) {
        return res.status(401).json({
          status: 401,
          message: "Atividade não encontrado",
        });
      }

      return res.status(200).json({ toDo: toDo });
    } catch (error) {
      return res.status(401).json({ status: 401, message: error.message });
    }
  }

  static async create(req, res) {
    const { atividade, descricao, feito } = req.body;

    if (!atividade || !descricao || !feito) {
      return res.status(401).json({
        status: 401,
        message: "Todos os campos precisam ser preenchidos",
      });
    }

    const toDoExistente = await ToDoModel.findOne({
      where: { atividade: atividade },
    });

    if (toDoExistente) {
      return res.status(401).json({
        status: 401,
        message: "Atividade existente",
      });
    }

    const novoToDo = {
      atividade,
      descricao,
      feito,
    };

    try {
      await ToDoModel.create(novoToDo);
      res
        .status(201)
        .json({ status: 201, message: "Atividade criada com sucesso" });
    } catch (error) {
      return res.status(401).json({ status: 401, message: error.message });
    }
  }

  static async deleteById(req, res) {
    const { id } = req.params;

    const toDo = await ToDoModel.findOne({
      where: { id: id },
      raw: true,
    });

    if (!toDo) {
      return res.status(401).json({
        status: 401,
        message: "Atividade não encontrado",
      });
    }

    try {
      await ToDoModel.destroy({ where: toDo });
      return res
        .status(200)
        .json({ status: 200, message: "Atividade apagada com sucesso" });
    } catch (error) {
      return res
        .status(401)
        .json({ status: 401, message: `Algo deu errado: ${error}` });
    }
  }

  static async updateById(req, res) {
    const { id } = req.params;

    const { atividade, descricao, feito } = req.body;

    const toDo = await ToDoModel.findOne({
      where: { id: id },
      raw: true,
    });

    if (!toDo) {
      return res.status(401).json({
        status: 401,
        message: "Atividade não encontrado",
      });
    }

    const novaAtividade = {
      atividade,
      descricao,
      feito,
    };

    try {
      await ToDoModel.update(novaAtividade, { where: toDo });
      return res
        .status(200)
        .json({ status: 200, message: "Atividade atualizada com sucesso" });
    } catch (error) {
      return res
        .status(401)
        .json({ status: 401, message: `Algo deu errado ${error}` });
    }
  }
}

module.exports = ToDoController;
