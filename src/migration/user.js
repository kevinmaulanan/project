const db = require('../config/db')

const user = `CREATE TABLE userAuth(
    id int(11) PRIMARY KEY AUTO_INCREMENT,
    username varchar(40),
    password varchar(48),
    level int(11)
    created_at datetime DEFAULT CURRENT_TIMESTAMP,
    updated_at datetime ON UPDATE CURRENT_TIMESTAMP,
)`


db.query(user, function (error, results, fields) {
    if (error) {
        throw error
    } else {
        console.log('Success Migration User')
    }
})
