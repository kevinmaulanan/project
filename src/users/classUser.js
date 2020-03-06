const db = require('../config/db')

module.exports = {
    superAdmin: async (req, res, next) => {
        try {
            if (await checkClass(req.auth, 'SuperAdmin')) {
                next()
            } else {
                throw new Error(" You are not a SuperAdmin")
            }
        } catch (e) {
            res.status(403).send({
                success: false,
                msg: e.message
            })
        }
    },

    Admin: async (req, res, next) => {
        try {
            if (await checkClass(req.auth, 'Admin')) {
                next()
            } else {
                throw new Error(" You are not a Admin")
            }
        } catch (e) {
            res.status(403).send({
                success: false,
                msg: e.message
            })
        }
    },

    Costumer: async (req, res, next) => {
        try {
            if (await checkClass(req.auth, 'Costumer')) {
                next()
            } else {
                throw new Error(" You are not a Costumer")
            }
        } catch (e) {
            res.status(403).send({
                success: false,
                msg: e.message
            })
        }
    },

    Bess: async (req, res, next) => {
        try {
            if (await checkClass(req.auth, 'Bess')) {
                next()
            } else {
                throw new Error(" You are not a Bess")
            }
        } catch (e) {
            res.status(403).send({
                success: false,
                msg: e.message
            })
        }
    },
}


const checkClass = (username, classUser) => {
    return new Promise((resolve, reject) => {
        if (username) {
            db.query(`SELECT user_class.class_user FROM user_privat JOIN users_detail ON user_privat.id_users_detail=users_detail.id JOIN user_class on user_privat.id=user_class.id where user_privat.username='${username}'`, (err, results, fields) => {
                if (err) {
                    console.log(err)
                    reject(new Error(err))
                } else {

                    resolve(results[1][0][`${classUser}`])
                }
            })
        } else {
            resolve(false)
        }
    })
}