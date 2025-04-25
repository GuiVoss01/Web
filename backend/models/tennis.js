import { db } from '../db.js';

export const Tennis = {
  getAll: () => {
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM tenis', (err, results) => {
        if (err) return reject(err);
        resolve(results);
      });
    });
  },

  getById: (id) => {
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM tenis WHERE id = ?', [id], (err, results) => {
        if (err) return reject(err);
        resolve(results[0]);
      });
    });
  },

  create: (tennisData) => {
    return new Promise((resolve, reject) => {
      db.query('INSERT INTO tenis SET ?', tennisData, (err, results) => {
        if (err) return reject(err);
        resolve({ id: results.insertId, ...tennisData });
      });
    });
  },

  update: (id, tennisData) => {
    return new Promise((resolve, reject) => {
      db.query('UPDATE tenis SET ? WHERE id = ?', [tennisData, id], (err) => {
        if (err) return reject(err);
        resolve({ id, ...tennisData });
      });
    });
  },

  delete: (id) => {
    return new Promise((resolve, reject) => {
      db.query('DELETE FROM tenis WHERE id = ?', [id], (err) => {
        if (err) return reject(err);
        resolve();
      });
    });
  }
};