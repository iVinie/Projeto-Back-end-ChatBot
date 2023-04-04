const express = require('express')
const db = require('./db')
const cors = require('cors')
const app = express()
const {isUserRegistered} = require('./dbCpf')
app.use(cors())
app.use((express.json()))
//Registrando um usuário
app.post('/register', (req, res) => {
  const { name } = req.body
  const { cpf } = req.body
  const { senha } = req.body
  // Verificar se o usuário já está registrado
  db.query(
    `SELECT * FROM users WHERE cpf = '${cpf}'`,
    (err, result) => {
      if (err) {
        console.log(err)
        res.status(500).send('Erro ao verificar usuário.')
      }
      if (result.length > 0) {
        res.status(409).send(result)
      } else {
        // Registrar usuário no banco de dados
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
  )
})
//Fazendo o login do usuário
app.post('/login', (req, res) => {
  console.log('estou em 1')
  const { cpf, senha } = req.body
  // Verifica se o CPF e a senha foram informados
  if (!cpf || !senha) {
    console.log('estou em 2')
    res.status(400).send({ mensagem: 'CPF e senha são obrigatórios' })
    return;
  }
  // Busca no banco de dados um usuário com o CPF e a senha informados
  const query = 'SELECT * FROM users WHERE cpf = ? AND senha = ?'
  db.query(query, [cpf, senha], (error, results) => {
    if (error) {
      console.log('estou em 3')
      console.error(error)
      res.status(500).send({ mensagem: 'Erro ao buscar usuário no banco de dados' })
      return;
    }
    // Se o usuário foi encontrado, retorna os dados dele para o cliente
    if (results.length > 0) {
      console.log('estou em 4')
      res.send({ cpf: results[0].cpf, nome: results[0].nome})
    } else {
      res.status(401).send({ mensagem: 'CPF ou senha incorretos' })
    }
  })
})
// Iniciar o servidor
const PORT = 3001
app.listen(PORT, () => console.log(`Servidor Express rodando na porta ${PORT}`))
