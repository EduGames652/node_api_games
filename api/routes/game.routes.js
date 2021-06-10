const express = require("express");
// const GameController = require("../controllers/gameController");

const gameRoutes = express.Router();

// router.get('/', (req, res) => res.json({ Server: 'OK'}));

gameRoutes.get('/games', api.api.controllers.GameController.index);
gameRoutes.get('/games/:_id',  api.api.controllers.GameController.detail);
gameRoutes.post('/games',  api.api.controllers.GameController.store);
gameRoutes.delete('/games/:_id',  api.api.controllers.GameController.delete);
gameRoutes.put('/games',  api.api.controllers.GameController.update);

module.exports = gameRoutes;