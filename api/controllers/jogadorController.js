const Jogadores = require('../models/Jogador');

module.exports = {
  async index(req, res) {
    const jogadores = await Jogadores.find();
    return res.json(jogadores);
  },

  async detail(req, res) {
    const { _id } = req.params;
    try {
      const jogadores = await Jogadores.findOne({ _id });
      return res.json(jogadores);
    } catch  (err) {
      return res.json({ error: "Este jogador não existe!" });
    }
  },

  async store(req, res) {
    const { nome, game } = req.body;
    try {
      if (await Jogadores.findOne({ nome }))
        return res.status(400).json({ error: "Este jogador já existe!" });
      const jogadores = await Jogadores.create({ nome, game });
      jogadores.createdAt = undefined
      return res.status(201).json({ message: "Jogador cadastrado com sucesso!", jogadores });
    } catch (err) {
      return res.status(400).json({ error: "Não foi possível cadastrar este jogador! Tente novamente." });
    }
  },

  async update(req, res) {
    const { _id, nome, descricao } = req.body;
    try {
      const jogadores = await Jogadores.findByIdAndUpdate({ _id }, { nome, descricao }, { new: true });
      return res.json({ message: "Jogador atualizado com sucesso!", jogadores });
    } catch (err) {
      return res.status(400).json({ error: "Não foi possível atualizar este jogador! Tente novamente." });
    }
  },

  async delete(req, res) {
    const { _id } = req.params;
    try {
      const jogadores = await Jogadores.findByIdAndDelete({ _id });
      return res.json({ message: "Jogador deletado com sucesso!" });
    } catch (err) {
      return res.status(400).json({ error: "Não foi possível deletar este jogador!" });
    }
  },
}