const { update } = require('../models/Game');
const Game = require('../models/Game');

module.exports = {
  async index(req, res) {
    const games = await Game.find();  // select * from games
    res.json(games);
  },

  async detail(req, res) {
    const { _id } = req.params;
    const games = await Game.findOne({ _id });  // select * from games where id = ?
    res.json(games);
  },

  async store(req, res) {
    const { nome, descricao } = req.body;
    const games = await Game.create({ nome, descricao });  // create * from games
    res.json(games);
  },

  async update(req, res) {
    const { _id, nome, descricao } = req.body;
    const games = await Game.findByIdAndUpdate({ _id }, {nome, descricao }, { new: true });  // create * from games
    res.json(games);
  },

  async delete(req, res) {
    const { _id } = req.params;
    const games = await Game.findByIdAndDelete({ _id });  // select * from games where id = ?
    res.json(games);
  },
}