const express = require('express')
const db = require('./db')
const cors = require('cors')
const app = express()
app.use(cors())
app.use((express.json()))
app.post('/register', (req, res) => {
  const { name } = req.body
  const { cpf } = req.body
  const { senha } = req.body
  const nameRegex = /^[A-Z][a-z]+([.'-][A-Za-z]+)*( [A-Za-z]+)+$/
  db.query(
    `SELECT * FROM users WHERE cpf = '${cpf}'`,
    (err, result) => {
      if (err) {
        console.log(err)
        res.status(500).send('Erro ao verificar usuário.')
      }
      if (nameRegex.test(name)) {
        if (result.length > 0) {
          res.status(409).send(result)
        } else {
          db.query(
            `INSERT INTO users (nome, cpf, senha) VALUES ("${name}", "${cpf}", "${senha}")`,
            (err, result) => {
              if (err) {
                console.log(err);
                res.status(500).send('Erro ao registrar usuário.')
              } else {
                res.status(201).send(result)
              }
            }
          )
        }
      }
    }
  )
})
app.post('/login', (req, res) => {
  console.log('estou em 1')
  const { cpf, senha } = req.body
  if (!cpf || !senha) {
    console.log('estou em 2')
    res.status(400).send({ mensagem: 'CPF e senha são obrigatórios' })
    return;
  }
  const query = 'SELECT * FROM users WHERE cpf = ? AND senha = ?'
  db.query(query, [cpf, senha], (error, results) => {
    if (error) {
      console.log('estou em 3')
      console.error(error)
      res.status(500).send({ mensagem: 'Erro ao buscar usuário no banco de dados' })
      return;
    }
    if (results.length > 0) {
      console.log('estou em 4')
      res.send({ cpf: results[0].cpf, nome: results[0].nome })
    } else {
      res.status(401).send({ mensagem: 'CPF ou senha incorretos' })
    }
  })
})
app.get('/perguntas', (req, res) => {
  // Executa a consulta no banco de dados
  db.query('SELECT pergunta,alternativa1, alternativa2, alternativa3, resposta FROM perguntas', (err, results) => {
    if (err) throw err;
    res.send(results);
  });
});
const PORT = 3001
app.listen(PORT, () => console.log(`Servidor Express rodando na porta ${PORT}`))
