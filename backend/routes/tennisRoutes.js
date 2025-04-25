import express from 'express';
import { tennisController } from './controllers/tennisController.js';

const router = express.Router();

// Rotas CRUD
router.get('/', tennisController.getAllTennis);        // GET /api/tenis
router.get('/:id', tennisController.getTennisById);    // GET /api/tenis/:id
router.post('/', tennisController.createTennis);       // POST /api/tenis
router.put('/:id', tennisController.updateTennis);     // PUT /api/tenis/:id
router.delete('/:id', tennisController.deleteTennis);  // DELETE /api/tenis/:id

export default router; // Exportação obrigatória