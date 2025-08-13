import db from '../config/db.js';

// Criar um produtor
export const criarProdutor = async (req, res) => {
    const { nome, localizacao } = req.body;
    try {
        const [result] = await db.query(
            "INSERT INTO produtores (nome, localizacao) VALUES (?, ?)",
            [nome, localizacao]
        );
        res.status(201).json({ id: result.insertId, nome, localizacao });
    } catch (error) {

        res.status(500).json({ error: error.message });
    }
};

// Atribuir produtor a um técnico
export const atribuirProdutor = async (req, res) => {
    const { produtor_id, tecnico_id, campanha_id } = req.body;
    try {
        const [result] = await db.query(
            "INSERT INTO produtores_tecnicos (produtor_id, tecnico_id, campanha_id) VALUES (?, ?, ?)",
            [produtor_id, tecnico_id, campanha_id]
        );
        res.status(201).json({
            message: "Produtor atribuído ao técnico com sucesso",
            produtor_id, tecnico_id, campanha_id
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


export const transferirProdutor = async (req, res) => {
    const { produtor_id, tecnico_antigo_id, tecnico_novo_id, campanha_id } = req.body;
    try {


        // Atualiza o técnico no relacionamento
        
        const [result] = await db.query(
            "UPDATE produtores_tecnicos SET tecnico_id = ? WHERE produtor_id = ? AND tecnico_id = ? AND campanha_id = ?",
            [tecnico_novo_id, produtor_id, tecnico_antigo_id, campanha_id]
        );
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "Relacionamento não encontrado" });
        }
        res.status(200).json({
            message: "Produtor transferido com sucesso",
            produtor_id, tecnico_novo_id, campanha_id
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};