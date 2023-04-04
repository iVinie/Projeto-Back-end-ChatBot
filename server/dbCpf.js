const db = require('./db')

async function isUserRegistered(cpf) {
  try {
    const result = db.query('SELECT cpf FROM users WHERE cpf = ?', [cpf]);
    return result.rowCount > 0; // se houver pelo menos uma linha, o usuário já foi registrado
  } catch (error) {
    console.error('Erro ao verificar usuário no banco de dados:', error);
    return false; // em caso de erro, considerar que o usuário não foi registrado
  }
}
module.exports = { isUserRegistered };