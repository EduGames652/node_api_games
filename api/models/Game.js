const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({
  nome: String,
  descricao: String
})

const games = mongoose.model('Games', DataSchema);
module.exports = games;