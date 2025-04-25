import { Tennis } from '../models/tennis.js';

// Objeto controller com todas as funções CRUD
const tennisController = {
  getAllTennis: async (req, res, next) => {
    try {
      const tennis = await Tennis.getAll();
      res.json(tennis);
    } catch (err) {
      next(err);
    }
  },

  getTennisById: async (req, res, next) => {
    try {
      const tennis = await Tennis.getById(req.params.id);
      if (!tennis) return res.status(404).json({ error: 'Tênis não encontrado' });
      res.json(tennis);
    } catch (err) {
      next(err);
    }
  },

  createTennis: async (req, res, next) => {
    try {
      const newTennis = await Tennis.create(req.body);
      res.status(201).json(newTennis);
    } catch (err) {
      next(err);
    }
  },

  updateTennis: async (req, res, next) => {
    try {
      const updatedTennis = await Tennis.update(req.params.id, req.body);
      if (!updatedTennis) {
        return res.status(404).json({ error: 'Tênis não encontrado' });
      }
      res.json(updatedTennis);
    } catch (err) {
      next(err);
    }
  },

  deleteTennis: async (req, res, next) => {
    try {
      const deleted = await Tennis.delete(req.params.id);
      if (!deleted) {
        return res.status(404).json({ error: 'Tênis não encontrado' });
      }
      res.status(204).send();
    } catch (err) {
      next(err);
    }
  }
};

// Exportação do controller
export { tennisController };