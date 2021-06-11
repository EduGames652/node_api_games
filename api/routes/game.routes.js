const express = require("express");
const GameController = require("../controllers/gameController");

const gameRoutes = express.Router();

gameRoutes.get('/games', GameController.list);
gameRoutes.get('/games/:_id', GameController.find);
gameRoutes.post('/games', GameController.create);
gameRoutes.delete('/games/:_id', GameController.delete);
gameRoutes.put('/games/:_id', GameController.update);

module.exports = gameRoutes;