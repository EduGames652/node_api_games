const express = require("express");
const GamesController = require("../controllers/GamesController");

const router = express.Router();

router.get('/', (req, res) => res.json({ Server: 'OK'}));

/* Games */
router.get('/games', GamesController.index);
router.get('/games/:_id', GamesController.detail);
router.post('/games', GamesController.store);
router.delete('/games/:_id', GamesController.delete);
router.put('/games', GamesController.update);

/* Jogadores */

module.exports = router;