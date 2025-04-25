import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001/api', // Note o /api
});

export default {
  getTenis: () => api.get('/tenis'),
  getTenisById: (id) => api.get(`/tenis/${id}`),
  createTenis: (data) => api.post('/tenis', data),
  updateTenis: (id, data) => api.put(`/tenis/${id}`, data),
  deleteTenis: (id) => api.delete(`/tenis/${id}`),
};