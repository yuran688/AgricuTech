import db from '../config/db.js';

export const criarCampanha = async (req, res) => {
    const { nome, empresa_id, data_inicio, data_fim } = req.body;
    try {
        const [result] = await db.query(
            "INSERT INTO campanhas (nome, empresa_id, data_inicio, data_fim) VALUES (?, ?, ?, ?)",
            [nome, empresa_id, data_inicio, data_fim]
        );
        res.status(201).json({ id: result.insertId, nome, empresa_id, data_inicio, data_fim });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};