const Jogador = require('../models/Jogador');
const Game = require('../models/Game');

const { errorMessage, successMessage } = require('../config/helpers/messages')

module.exports = {
  async list(req, res) {
    const jogador = await Jogador.find().populate('game', '-jogadores');

    return res.json({ jogador });
  },

  async find(req, res) {
    try {
      const { _id } = req.params;
      const jogador = await Jogador.findById(_id).populate('game', '-jogadores');
      
      if (!jogador) throw new Error();

      return res.json({ jogador });
    } catch  (err) {
      return res.status(404).json(errorMessage('Jogador não encontrado'));
    }
  },

  async create(req, res) {
    try {
      const { nome, game: gameName } = req.body;
      if (await Jogador.findOne({ nome }))
        return res.status(400).json(errorMessage('Este jogador já existe!'));
      
      const game = await Game.findOne({ nome: gameName })
      const jogador = await Jogador.create({
        nome,
        game: game._id
      });

      game.jogadores.push(jogador)
      await game.save()

      return res.status(201).json(successMessage('Jogador criado com sucesso!'));
    } catch (err) {
      return res.status(400).json(errorMessage('Não foi possível cadastrar este jogador! Tente novamente.'));
    }
  },

  async update(req, res) {
    try {
      const { _id } = req.params;
      const { nome } = req.body;
      await Jogador.findByIdAndUpdate({ _id }, { nome });

      return res.json(successMessage('Jogador atualizado com sucesso!'));
    } catch (err) {
      return res.status(400).json(errorMessage('Não foi possível atualizar este jogador! Tente novamente.'));
    }
  },

  async delete(req, res) {
    try {
      const { _id } = req.params;
      await Jogador.findByIdAndDelete({ _id });

      return res.json(successMessage('Jogador deletado com sucesso!'));
    } catch (err) {
      return res.status(400).json(errorMessage('Não foi possível deletar este jogador!'));
    }
  },
}