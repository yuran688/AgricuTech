import express from 'express';
import { criarProdutor, atribuirProdutor, transferirProdutor } from '../controllers/produtorController.js';
const router = express.Router();

router.post('/', criarProdutor);
router.post('/atribuir', atribuirProdutor);
router.put('/transferir', transferirProdutor);

export default router;