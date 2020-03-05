const db = require('../config/db')

db.query(`CREATE TABLE users(
    id int(11) PRIMARY KEY AUTO_INCREMENT,
    name varchar(60),
    username varchar(40),
    password varchar(48),
    created_at datetime DEFAULT CURRENT_TIMESTAMP,
    updated_at datetime
)`, function (error, results, fields) {
    if (error) {
        throw error
    } else {
        console.log('Success Migration User')
    }
})
