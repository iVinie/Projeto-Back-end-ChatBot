const express = require('express')
const db = require('./db')
const cors = require('cors')
const app = express()
app.use(cors())
app.use((express.json()))
app.post('/validacao', (req, res) => {
  const { cpf } = req.body
  db.query(
    `SELECT * FROM users WHERE cpf = '${cpf}'`,
    (err, result) => {
      if (err) {
        console.log(err)
        res.status(500).send('Erro ao verificar usuário.')
      }
      if (result.length > 0) {
        res.status(200).send(false)
      }
    })
})
app.post('/register', (req, res) => {
  const { name } = req.body
  const { cpf } = req.body
  const { senha } = req.body
  const nameRegex = /^[A-ZÀ-ÖØ-öø-ſ][a-zà-öø-ÿ]+([.'-][A-Za-zà-öø-ÿ]+)*( [A-Za-zà-öø-ÿ]+)+$/;
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
  const { cpf, senha } = req.body
  if (!cpf || !senha) {
    res.status(400).send({ mensagem: 'CPF e senha são obrigatórios' })
    return;
  }
  const query = 'SELECT * FROM users WHERE cpf = ? AND senha = ?'
  db.query(query, [cpf, senha], (error, results) => {
    if (error) {
      console.error(error)
      res.status(500).send({ mensagem: 'Erro ao buscar usuário no banco de dados' })
      return;
    }
    if (results.length > 0) {
      db.query(`UPDATE users SET logado = true WHERE cpf=${cpf}`)
      res.send({ cpf: results[0].cpf, nome: results[0].nome, isAdmin: results[0].is_admin })
    } else {
      res.status(401).send({ mensagem: 'CPF ou senha incorretos' })
    }
  })
})
app.get('/perguntas', (req, res) => {
  // Executa a consulta no banco de dados
  db.query('SELECT pergunta,alternativa1, alternativa2, alternativa3, alternativa4, alternativa5, resposta FROM perguntas ORDER BY RAND() LIMIT 10', (err, results) => {
    if (err) throw err;
    res.send(results);
  });
});
app.post('/save', (req, res) => {
  const { name } = req.body
  const { valor } = req.body
  const { user_cpf } = req.body
  const { disciplina_nome } = req.body
  db.query(
    `SELECT * FROM notas WHERE user_cpf = '${user_cpf}'`,
    (err, result) => {
      if (err) {
        console.log(err)
        res.status(500).send('Erro ao verificar usuário.')
      }
      if (result.length > 0) {
        res.status(409).send(result)
      } else {
        db.query(
          `INSERT INTO notas (user_nome, user_cpf, disciplina_nome, valor) VALUES ("${name}", "${user_cpf}",  "${disciplina_nome}", "${valor}")`,
          (err, result) => {
            if (err) {
              console.log(err);
              res.status(500).send('Erro ao registrar a nota.')
            } else {
              res.status(201).send(result)
            }
          }
        )
      }
    }
  )
})
app.post('/verifique', (req, res) => {
  const { cpf_user } = req.body
  db.query(
    `SELECT * FROM verificacao WHERE cpf_user = '${cpf_user}'`,
    (err, result) => {
      if (err) {
        console.log(err)
        res.status(500).send('Erro ao verificar usuário.')
      }
      if (result.length > 0) {
        res.status(409).send(result)
      } else {
        db.query(
          `INSERT INTO verificacao (cpf_user, verificacao_user) VALUES ("${cpf_user}", true)`,
          (err, result) => {
            if (err) {
              console.log(err);
              res.status(500).send('Erro ao registrar a inicialização.')
            } else {
              res.status(201).send(result)
            }
          }
        )
      }
    }
  )
})
app.post('/testarLogin', (req, res) => {
  const { cpf } = req.body
  db.query(
    `SELECT * FROM users WHERE cpf = '${cpf}'`,
    (err, result) => {
      if (err) {
        console.log(err)
        res.status(500).send('Erro ao verificar usuário.')
      }
      if (result.length === 0) {
        res.status(409).send(result)
      } else {
        res.status(200).send(result)
      }
    }
  )
})
app.post('/autenticacao', (req, res) =>{
  const { name } = req.body
  const { cpf } = req.body
  const { isAdmin } = req.body
  db.query(`SELECT * FROM users WHERE nome = '${name}' AND cpf = '${cpf}' AND is_admin = '${isAdmin}' AND logado = '1'`, (err, result) =>{
    if (err) {
      console.log(err)
      res.status(500).send(false)
    }else if(result.length > 0){
      res.status(200).send(true)
    }else{
      res.status(409).send(false)
    }
  })
})
app.post('/sair', (req, res) =>{
  const { cpf } = req.body
  db.query(`UPDATE users SET logado = false WHERE cpf=${cpf}`, (err, result) => {
    if(err){
      console.log(err)
      res.send(result)
    }else{
      res.status(200).send(result)
    }
  })
})
app.post('/notas', (req, res) => {
  const { cpf } = req.body
  const { isAdmin } = req.body
  if(isAdmin === '1'){
    db.query('SELECT * FROM notas', (err, result) =>{
      if(err){
        console.log(err)
        res.send(result)
      }else{
        res.status(200).send(result)
      }
    })
  }else{
    db.query(`SELECT * FROM notas WHERE user_cpf = '${cpf}'`, (err, result) =>{
      if(err){
        console.log(err)
        res.send(result)
      }else{
        res.status(200).send(result)
      }
    })
  }

})
  const PORT = 3001
  app.listen(PORT, () => console.log(`Servidor Express rodando na porta ${PORT}`))
