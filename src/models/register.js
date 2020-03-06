const db = require('../config/db')

module.exports = {
     register: (name, username, password, email, ) => {
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
                                                                           resolve({ success: false, message: 'hadeh' })
                                                                      } else {
                                                                           db.query(`SELECT COUNT(*) as total FROM users_detail WHERE email = '${email}' LIMIT 1 `,
                                                                                (error, results, fields) => {
                                                                                     if (!error) {
                                                                                          db.query(`select max(id) as id from users_detail`, (error, results, fields) => {
                                                                                               if (error) {
                                                                                                    resolve({ success: false, msg: 'salah disini2' })
                                                                                               } else {

                                                                                                    const maxId = results[0].id
                                                                                                    db.query(`INSERT INTO user_privat(username, password, id_users_detail, id_user_class) VALUES('${username}','${password}',${maxId},4)`, (error, results, fields) => {
                                                                                                         if (error) {
                                                                                                              resolve(true)
                                                                                                              reject(new Error(error))
                                                                                                         }
                                                                                                         resolve(true)

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


}