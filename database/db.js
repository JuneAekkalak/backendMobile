const mysql = require('mysql2');

const pool = mysql.createPool({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'HealtCareDB'
});

module.exports = pool.promise();