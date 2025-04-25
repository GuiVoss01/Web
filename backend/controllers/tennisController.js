import { Tennis } from '../models/tennis.js';

export const tennisController = {
  getAllTennis: async (req, res) => {
    try {
      const tennis = await Tennis.getAll();
      res.json(tennis);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  getTennisById: async (req, res) => {
    try {
      const tennis = await Tennis.getById(req.params.id);
      if (!tennis) return res.status(404).json({ error: 'Tênis não encontrado' });
      res.json(tennis);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  createTennis: async (req, res) => {
    try {
      const newTennis = await Tennis.create(req.body);
      res.status(201).json(newTennis);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  updateTennis: async (req, res) => {
    try {
      const updatedTennis = await Tennis.update(req.params.id, req.body);
      res.json(updatedTennis);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  deleteTennis: async (req, res) => {
    try {
      await Tennis.delete(req.params.id);
      res.status(204).send();
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
};