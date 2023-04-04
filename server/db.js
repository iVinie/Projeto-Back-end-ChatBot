const mysql = require('mysql2')
// Configurar conexão com o banco de dados MySQL
const db = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'password',
    database: 'provabot'
})
module.exports = db;