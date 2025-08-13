
import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config(); // Lê as variáveis do .env

// Cria um pool de conexões com o banco
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

export default pool;
