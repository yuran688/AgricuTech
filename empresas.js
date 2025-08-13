import express from 'express';
import { criarEmpresa } from '../controllers/empresaController.js';
const router = express.Router();

router.post('/', criarEmpresa);

export default router;
