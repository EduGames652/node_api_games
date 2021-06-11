const mongoose = require('../config/connection/connection');

const GameSchema = new mongoose.Schema({
  nome: {
    type: String,
    unique: true,
    required: true,
  },
  descricao: {
    type: String,
    required: true,
  },
  jogadores: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Jogadores'
  }],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Game = mongoose.model('Game', GameSchema);

module.exports = Game;