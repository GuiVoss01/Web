import { db } from '../db.js';

export const Tennis = {
  getAll: async () => {
    const [rows] = await db.query('SELECT * FROM tenis');
    return rows;
  },

  getById: async (id) => {
    const [rows] = await db.query('SELECT * FROM tenis WHERE id = ?', [id]);
    return rows[0] || null;
  },

  create: async (tennisData) => {
    const [result] = await db.query('INSERT INTO tenis SET ?', tennisData);
    return { id: result.insertId, ...tennisData };
  },

  update: async (id, tennisData) => {
    await db.query('UPDATE tenis SET ? WHERE id = ?', [tennisData, id]);
    const [updated] = await db.query('SELECT * FROM tenis WHERE id = ?', [id]);
    return updated[0] || null;
  },

  delete: async (id) => {
    const [result] = await db.query('DELETE FROM tenis WHERE id = ?', [id]);
    return result.affectedRows > 0;
  }
};