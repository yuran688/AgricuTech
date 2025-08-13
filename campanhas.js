import express from 'express';
import { criarCampanha } from '../controllers/campanhaController.js';
const router = express.Router();

router.post('/', criarCampanha);

export default router;
