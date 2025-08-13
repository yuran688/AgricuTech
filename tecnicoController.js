import db from '../config/db.js';

export const criarTecnico = async (req, res) => {
    const { nome, campanha_id } = req.body;
    try {
        const [result] = await db.query(
            "INSERT INTO tecnicos (nome, campanha_id) VALUES (?, ?)",
            [nome, campanha_id]
        );
        res.status(201).json({ id: result.insertId, nome, campanha_id });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};