const express = require("express");
const JogadorController = require("../controllers/jogadorController");

const jogadorRoutes = express.Router();

jogadorRoutes.get('/jogadores', JogadorController.list);
jogadorRoutes.get('/jogadores/:_id', JogadorController.find);
jogadorRoutes.post('/jogadores', JogadorController.create);
jogadorRoutes.delete('/jogadores/:_id', JogadorController.delete);
jogadorRoutes.put('/jogadores/:_id', JogadorController.update);

module.exports = jogadorRoutes;