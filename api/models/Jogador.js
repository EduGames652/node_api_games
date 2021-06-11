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

const Jogador = mongoose.model('Jogador', JogadorSchema);

module.exports = Jogador;