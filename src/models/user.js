const db = require('../config/db')

module.exports = {
  create: (name, username, password, email, ) => {
    return new Promise((resolve, reject) => {
      db.query(`SELECT COUNT(*) as total FROM user_privat WHERE username = '${username}' LIMIT 1`,
        (error, results, fields) => {
          if (!error) {
            const { total } = results[0]
            if (total !== 0) {
              resolve({ success: false, message: 'Username already used. Please fill in the email again' })
            } else {
              {
                db.query(`SELECT COUNT(*) as total FROM users_detail WHERE email = '${email}' LIMIT 1`,
                  (error, results, fields) => {
                    if (!error) {
                      const { total } = results[0]
                      if (total !== 0) {
                        resolve({ success: false, message: 'Email already used. Please fill in the email again ' })
                      } else {
                        // const hashpassword = bcrypt.hashSync('${password}', salt) '${hashpassword}'
                        db.query(`INSERT INTO users_detail(nama, email) VALUES('${name}','${email}')`,
                          (error, result, fields) => {
                            if (error) {
                              resolve(false)
                            } else {
                              db.query(`SELECT COUNT(*) as total FROM users_detail WHERE email = '${email}' LIMIT 1 `,
                                (error, results, fields) => {
                                  if (!error) {
                                    console.log('woi7')
                                    db.query(`select max(id) as id from users_detail`, (error, results, fields) => {
                                      if (error) {
                                        resolve(false)
                                      } else {

                                        const maxId = results[0].id
                                        console.log(maxId)
                                        db.query(`INSERT INTO user_privat(username, password, id_users_detail, id_user_class) VALUES('${username}','${password}',${maxId},4)`, (error, results, fields) => {
                                          if (!error) {
                                            resolve(true)
                                          }
                                        })
                                      }
                                    })
                                  }
                                }
                              )
                            }

                          })
                      }
                    } else {
                      reject(new Error(error))
                    }
                  })
              }
            }
          }
        }
      )
    })
  },

  get: (id) => {
    if (id) {
      return new Promise((resolve, reject) => {
        const query = `SELECT user_privat.id, user_privat.username, users_detail.nama, users_detail.email, user_class.class_user, user_privat.created_at, user_privat.updated_at FROM user_privat JOIN users_detail ON user_privat.id_users_detail=users_detail.id JOIN user_class ON user_privat.id_user_class=user_class.id WHERE user_privat.id=${id}`
        db.query(query, (error, result, field) => {
          if (error) reject = new Error(error)
          resolve(result[0])
        })
      })
    } else {
      return new Promise((resolve, reject) => {
        db.query(`SELECT user_privat.id, user_privat.username, users_detail.nama, users_detail.email, user_class.class_user, user_privat.created_at, user_privat.updated_at FROM user_privat JOIN users_detail ON user_privat.id_users_detail=users_detail.id JOIN user_class ON user_privat.id_user_class=user_class.id`, (error, result, field) => {
          if (error) reject = new Error(error)
          resolve(result)
        })
      }
      )
    }
  }
}