const db = require('../config/db')
const bcrypt = require('bcryptjs')

module.exports = {
    update: (username, password, newPassword) => {
        return new Promise((resolve, reject) => {
            console.log(newPassword)
            if (username && password) {
                db.query(`SELECT COUNT(*) as total FROM user_privat where username='${username}'`,
                    (error, results, fields) => {
                        if (error) {
                            resolve({ success: false, message: 'Username Not Found' })
                        } else {
                            db.query(`SELECT *FROM user_privat where username='${username}'`, (error, results, fields) => {
                                const dataPassword = results[0].password
                                console.log(dataPassword)
                                const compare = bcrypt.compareSync(password, dataPassword)
                                console.log(compare)
                                if (compare) {

                                    const hash = bcrypt.hashSync('${newPassword}', bcrypt.genSaltSync(10))
                                    console.log(hash)
                                    db.query(`UPDATE user_privat SET password='${hash}' where username='${username}'`, (error, results, fields) => {
                                        if (error) {
                                            resolve({ success: false, message: 'password and new password false' })
                                        } else {
                                            resolve({ success: true, message: 'Data has been updated' })
                                        }
                                    })
                                }

                            })
                        }
                    })
            }
        })
    }
}