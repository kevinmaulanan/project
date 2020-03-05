const db = require('../config/db')

db.query(`CREATE TABLE userAuth(
    id int(11) PRIMARY KEY AUTO_INCREMENT,
    username varchar(40),
    password varchar(48),
    created_at datetime CURRENT_TIMESTAMP,
    updated_at datetime ON UPDATE CURRENT_TIMESTAMP,
    id_level int(1),
)`, function (error, results, fields) {
    if (error) {
        throw error
    } else {
        console.log('Success Migration User')
    }
})
