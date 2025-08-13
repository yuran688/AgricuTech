import express from 'express';
import dotenv from 'dotenv';
import empresasRoutes from './routes/empresas.js';
import campanhasRoutes from './routes/campanhas.js';
import tecnicosRoutes from './routes/tecnicos.js';
import produtoresRoutes from './routes/produtores.js';
import  setupDatabase  from "./config/setupDatabase.js";


dotenv.config();
const app = express();
app.use(express.json());

setupDatabase();

// Rotas
app.use('/empresas', empresasRoutes);
app.use('/campanhas', campanhasRoutes);
app.use('/tecnicos', tecnicosRoutes);
app.use('/produtores', produtoresRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Conexao ao servidor ${process.env.PORT}`);
});