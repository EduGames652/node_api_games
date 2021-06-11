const Game = require('../models/Game');

const { errorMessage, successMessage } = require('../config/helpers/messages');

module.exports = {
  async list(req, res) {
    const games = await Game.find().populate('jogadores', '-game', '-descricao');

    return res.json({ games });
  },

  async find(req, res) {
    try {
      const { _id } = req.params;
      const game = await Game.findById(_id).populate('jogadores', '-game', '-descricao');

      if (!game) throw new Error('Game não encontrado');

      return res.json({ game });
    } catch  (err) {
      return res.json(errorMessage('Game não encontrado'));
    }
  },

  async create(req, res) {
    try {
      const { nome, descricao } = req.body;
      if (await Game.findOne({ nome }))
        return res.status(400).json(errorMessage('Este game já existe!'));

      await Game.create({ nome, descricao });

      return res.status(201).json(successMessage('Game cadastrado com sucesso!'));
    } catch (err) {
      return res.status(400).json(errorMessage('Não foi possível cadastrar este game! Tente novamente.'));
    }
  },

  async update(req, res) {
    try {
      const { _id } = req.params;
      const { nome, descricao } = req.body;
      await Game.findByIdAndUpdate({ _id }, { nome, descricao });

      return res.json(successMessage('Game atualizado com sucesso!'));
    } catch (err) {
      return res.status(400).json(errorMessage('Não foi possível atualizar este game! Tente novamente.'));
    }
  },

  async delete(req, res) {
    try {
      const { _id } = req.params;
      await Game.findByIdAndDelete({ _id });

      return res.json(successMessage('Game deletado com sucesso!'));
    } catch (err) {
      return res.status(400).json(errorMessage('Não foi possível deletar este game!'));
    }
  },
}