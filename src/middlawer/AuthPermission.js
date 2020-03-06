const db = require('../config/db')
const jwt = require('jsonwebtoken')
require('dotenv').config()

module.exports = {
    superAdmin: async (req, res, next) => {
        try {
            if (await checkPermission(username, password, 'SuperAdmin')) {
                next()
            } else {
                throw new Error("You Don't SuperAdmin")
            }
        } catch (e) {
            res.send({
                success: false,
                msg: e.message
            })
        }
    },

    Admin: async (req, res, next) => {
        try {
            if (await checkPermission(username, password, 'Admin')) {
                next()
            } else {
                throw new Error("You Don't Admin")
            }
        } catch (e) {
            res.send({
                success: false,
                msg: e.message
            })
        }
    },
}

// Costumer: async (req, res, next) => {
//     try {
//         if (await checkPermission(req.auth, 'Costumer')) {

//         }
//     }
// }
const { username, password } = req.body
const checkPermission = (username, password, role) => {
    return new Promise((resolve, reject) => {
        if (username && password) {
            db.query(`SELECT *FROM user_privat where username='${username}`,
                (error, results, field) => {
                    const dataUsername = results[0].username
                    const dataPassword = results[0].password
                    if (username === dataUsername) {
                        const compare = bcrypt.compareSync(password, dataPassword)
                        if (compare) {
                            db.query(`SELECT user_privat.id, user_privat.username, user_privat.password, user_class.class_user FROM user_privat JOIN user_class ON user_privat.id_user_class= user_class.id where username='${dataUsername}'`,
                                (error, results, field) => {
                                    const role = results[0].user_class.class_user
                                    console.log(role)
                                    if (role === 4 || role === 3) {
                                        const token = jwt.sign(data, process.env.APP_KEY, { expiresIn: '15m' })
                                    }
                                }
                            )
                        } else {
                            resolve({ success: false, msg: 'Password invalid' })
                        }
                    } else {
                        resolve({ success: false, msg: 'Username does not exist' })
                    }
                }
            )

        } else {
            resolve({ success: false, msg: 'please insert username' })
        }
    })
}