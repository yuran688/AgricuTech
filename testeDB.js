import db from './config/db.js';

const testarConexao = async () => {
    try {
        const [rows] = await db.query("SELECT 1 + 1 AS resultado");
        console.log('✅ Conexão OK! Teste retornou:', rows[0].resultado);
    } catch (error) {
        console.error('❌ Erro na conexão:', error.message);
    } finally {
        await db.end(); // fecha a conexão
    }
};

testarConexao();
