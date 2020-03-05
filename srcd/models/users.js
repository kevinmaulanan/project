const db = require('../config/db')
// const bcrypt = require('bcryptjs')

module.exports = {
    create: (username, password, level) => {
        return new Promise((resolve, reject) => {
            db.query(`SELECT COUNT(*) as total FROM users WHERE username = '${username}' LIMIT 1`,
                (error, results, fields) => {
                    if (!error) {
                        const { total } = results[0]
                        if (total !== 0) {
                            resolve(false)
                        } else {
                            db.query(`INSERT INTO users(username, password, level) VALUES('${username}', '${password}','${level}' )`,
                                (error, result, fields) => {
                                    if (error) {
                                        console.log(error)
                                        reject(new Error(error))
                                    }
                                    resolve(true)
                                })
                        }
                    } else {
                        reject(new Error(error))
                    }
                })
        })
    },
}