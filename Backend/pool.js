const mysql2 = require('mysql2/promise')

const pool = mysql2.createPool({
    host:'my-sql',
    database:'practice',
    password:'Shruti@23',
    user:'root',
    port:3306
})

module.exports = pool