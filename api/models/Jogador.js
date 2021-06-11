const mongoose = require('../config/connection/connection');

const JogadorSchema = new mongoose.Schema({
  nome: {
    type: String,
    unique: true,
    required: true,
  },
  game: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Game'
  }],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Jogador = mongoose.model('Jogadores', JogadorSchema);

module.exports = Jogador;