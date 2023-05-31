const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('database/banco.db');

db.exec(`
  CREATE TABLE IF NOT EXISTS clientes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT,
    email TEXT UNIQUE,
    senha TEXT
  )`
)

db.exec(
  `CREATE TABLE IF NOT EXISTS lugares (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    url TEXT,
    cidade TEXT,
    estado TEXT
  )`
);

db.exec(
  `CREATE TABLE IF NOT EXISTS lista_lugares (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    cidade TEXT UNIQUE
  )`
);


function consultarLugar() {
  return new Promise((resolve, reject) => {
    db.all('SELECT url, cidade, estado FROM lugares;', [], (err, rows) => {
      if (err) {
        reject(err);
      } else {
        resolve(rows);
      }
    });
  });
}

function adicionarLugar(url, cidade, estado) {
  return new Promise((resolve, reject) => {
    db.all(`INSERT INTO lugares (url, cidade, estado) VALUES (?, ?, ?)`, [url, cidade, estado], (err, rows) => {
      if (err) {
        reject(err);
      } else {
        resolve(rows);
      }
    });
  });
}

function removerLugar(cidade) {
  return new Promise((resolve, reject) => {
    db.all(`DELETE FROM lugares WHERE cidade = ?`, [cidade], (err, rows) => {
      if (err) {
        reject(err);
      } else {
        resolve(rows);
      }
    });
  });
}

function consultarLugarLista() {
  return new Promise((resolve, reject) => {
    db.all('SELECT cidade FROM lista_lugares;', [], (err, rows) => {
      if (err) {
        reject(err);
      } else {
        resolve(rows);
      }
    });
  });
}

function adicionarLugarLista(cidade) {
  return new Promise((resolve, reject) => {
    db.all(`INSERT INTO lista_lugares (cidade) VALUES (?)`, [cidade], (err, rows) => {
      if (err) {
        reject(err);
      } else {
        resolve(rows);
      }
    });
  });
}

function removerLugarLista(cidade) {
  return new Promise((resolve, reject) => {
    db.all(`DELETE FROM lista_lugares WHERE cidade = ?`, [cidade], (err, rows) => {
      if (err) {
        reject(err);
      } else {
        resolve(rows);
      }
    });
  });
}

function consultarUsuario(email, email) {
  return new Promise((resolve, reject) => {
    db.all('SELECT * FROM clientes WHERE email = ? AND senha = ?', [email, email], (err, rows) => {
      if (err) {
        reject(err);
      } else {
        resolve(rows);
      }
    });
  });
}

function adicionarUsuario (nome, email, senha){
  return new Promise((resolve, reject) => {
    db.all(`INSERT INTO clientes (nome, email, senha) VALUES (?, ?, ?)`, [nome, email, senha], (err, rows) => {
      if (err) {
        reject(err);
      } else {
        resolve(rows);
      }
    });
  });
}

// adicionarLugar("../img/Cards/Sao_Paulo.png", "São Paulo", "São Paulo")
// adicionarLugar("../img/Cards/Florianopolis.png", "Florianópolis", "Santa Catarina")
// adicionarLugar("../img/Cards/Petropolis.png", "Petrópolis", "Rio de Janeiro")
// adicionarLugar("../img/Cards/Cataratas.png", "Foz do Iguaçu", "Paraná")
// adicionarLugar("../img/Cards/Chapada_Diamantina.png", "Chapada Diamantina", "Bahia")
// adicionarLugar("../img/Cards/Gramado.png", "Gramado", "Rio Grande do Sul")
// adicionarLugar("../img/Cards/Curitiba.png", "Curitiba", "Paraná")
// adicionarLugar("../img/Cards/Rio_Janeiro.png", "Rio de Janeiro", "Rio de Janeiro")

// adicionarLugarLista('Salvador')
// adicionarLugarLista('Ouro Preto')
// adicionarLugarLista('Manaus')
// adicionarLugarLista('Holambra')
// adicionarLugarLista('Tiradentes')
// adicionarLugarLista('Maceió')
// adicionarLugarLista('Belo Horizonte')
// adicionarLugarLista('Urubici')
// adicionarLugarLista('Porto Alegre')
// adicionarLugarLista('Recife')
// adicionarLugarLista('São Luís')
// adicionarLugarLista('Brasília')
// adicionarLugarLista('Acaraju')
// adicionarLugarLista('Belém')

module.exports = {
  consultarLugar,
  consultarUsuario,
  consultarLugarLista,
  adicionarLugar,
  adicionarUsuario,
  adicionarLugarLista,
  removerLugar,
  removerLugarLista,
};
