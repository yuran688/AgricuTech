import express from 'express';
import { criarCampanha } from '../controllers/campanhaController.js';
const router = express.Router();

router.post('/', criarcamanhas);

export default router;
