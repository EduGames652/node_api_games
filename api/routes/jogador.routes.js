const express = require("express");
// const JogadorController = require("../controllers/jogadorController");

const jogadorRoutes = express.Router();

jogadorRoutes.get('/jogadores',  api.api.controllers.JogadorController.index);
jogadorRoutes.get('/jogadores/:_id',  api.api.controllers.JogadorController.detail);
jogadorRoutes.post('/jogadores',  api.api.controllers.JogadorController.store);
jogadorRoutes.delete('/jogadores/:_id',  api.api.controllers.JogadorController.delete);
jogadorRoutes.put('/jogadores',  api.api.controllers.JogadorController.update);

module.exports = jogadorRoutes;