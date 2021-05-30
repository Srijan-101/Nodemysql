const mysql = require('mysql');

const conn = mysql.createPool({
    user : 'root',
    host : '127.0.0.1',
    password : '',
    database : 'Ncit'
})

module.exports = conn;
