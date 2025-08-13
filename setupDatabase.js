import { db } from "./db.js";

// Script para criar tabelas
export function setupDatabase() {
  const sql = `
    CREATE TABLE IF NOT EXISTS empresas (
      id INT AUTO_INCREMENT PRIMARY KEY,
      nome VARCHAR(100) NOT NULL,
      cnpj VARCHAR(20) UNIQUE
    );

    CREATE TABLE IF NOT EXISTS campanhas (
      id INT AUTO_INCREMENT PRIMARY KEY,
      nome VARCHAR(100) NOT NULL,
      data_inicio DATE NOT NULL,
      data_fim DATE NOT NULL,
      empresa_id INT,
      FOREIGN KEY (empresa_id) REFERENCES empresas(id) ON DELETE CASCADE
    );

    CREATE TABLE IF NOT EXISTS tecnicos (
      id INT AUTO_INCREMENT PRIMARY KEY,
      nome VARCHAR(100) NOT NULL,
      especialidade VARCHAR(100),
      empresa_id INT,
      FOREIGN KEY (empresa_id) REFERENCES empresas(id) ON DELETE CASCADE
    );

    CREATE TABLE IF NOT EXISTS produtores (
      id INT AUTO_INCREMENT PRIMARY KEY,
      nome VARCHAR(100) NOT NULL,
      propriedade VARCHAR(100)
    );

    CREATE TABLE IF NOT EXISTS produtor_campanha (
      produtor_id INT,
      campanha_id INT,
      PRIMARY KEY (produtor_id, campanha_id),
      FOREIGN KEY (produtor_id) REFERENCES produtores(id) ON DELETE CASCADE,
      FOREIGN KEY (campanha_id) REFERENCES campanhas(id) ON DELETE CASCADE
    );
  `;

  db.query(sql, (erro) => {
    if (erro) {
      console.error("❌ Erro ao criar tabelas:", erro);
    } else {
      console.log("📦 Tabelas criadas/verificadas com sucesso!");
    }
  });
}
