const Games = require('../models/Game');

module.exports = {
  async index(req, res) {
    const games = await Games.find();
    return res.json({ Games: games });
  },

  async detail(req, res) {
    const { _id } = req.params;
    try {
      const games = await Games.findOne({ _id });
      return res.json({ Games: games });
    } catch  (err) {
      return res.json({ error: "Este game não existe!" });
    }
  },

  async store(req, res) {
    const { nome, descricao } = req.body;
    try {
      if (await Games.findOne({ nome }))
        return res.status(400).json({ error: "Este game já existe!" });
      const games = await Games.create({ nome, descricao });
      games.createdAt = undefined
      return res.status(201).json({ Games: games,  message: "Game cadastrado com sucesso!",  });
    } catch (err) {
      return res.status(400).json({ error: "Não foi possível cadastrar este game! Tente novamente." });
    }
  },

  async update(req, res) {
    const { _id, nome, descricao } = req.body;
    try {
      const games = await Games.findByIdAndUpdate({ _id }, { nome, descricao }, { new: true });
      return res.json({ message: "Game atualizado com sucesso!", games });
    } catch (err) {
      return res.status(400).json({ error: "Não foi possível atualizar este game! Tente novamente." });
    }
  },

  async delete(req, res) {
    const { _id } = req.params;
    try {
      const games = await Games.findByIdAndDelete({ _id });
      return res.json({ message: "Game deletado com sucesso!" });
    } catch (err) {
      return res.status(400).json({ error: "Não foi possível deletar este game!" });
    }
  },
}