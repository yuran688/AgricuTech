import express from 'express';
import { criarTecnico } from '../controllers/tecnicoController.js';;
const router = express.Router();

router.post('/', criarTecnico);

export default router;
