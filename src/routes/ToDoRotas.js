const express = require('express');
const router = express.Router();

// Controller
const ToDoController = require('../controller/ToDoController.js');

// Rotas / CRUD

// A Rota deve criar uma nova Atividade
router.post('/create', ToDoController.create);

// A Rota deve listar todas as Atividades
router.get('/', ToDoController.showAll);

// A Rota deve listar uma atividade baseado em seu ID
router.get('/:id', ToDoController.showById);

//  A Rota deve deletar uma atividade baseado em seu ID
router.delete('/:id', ToDoController.deleteById);

// A Rota deve atualizar uma atividade baseado em seu ID
router.patch('/:id', ToDoController.updateById);

module.exports = router;