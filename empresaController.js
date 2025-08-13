import db from '../config/db.js';

export const criarEmpresa = async (req, res) => {
    const { nome, cnpj, telefone, email } = req.body;
    try {
        const [result] = await db.query(
            "INSERT INTO empresas (nome, cnpj, telefone, email) VALUES (?, ?, ?, ?)",
            [nome, cnpj, telefone, email]
        );
        res.status(201).json({ id: result.insertId, nome, cnpj, telefone, email });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};