import express from 'express';
import { tennisController } from '.tennisController.js';

const router = express.Router();

router.get('/', tennisController.getAllTennis);
router.get('/:id', tennisController.getTennisById);
router.post('/', tennisController.createTennis);
router.put('/:id', tennisController.updateTennis);
router.delete('/:id', tennisController.deleteTennis);

export default router;