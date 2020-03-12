const db = require('../config/db')
const uuidv1 = require('uuid').v1

module.exports = {
     register: (name, username, password, email, dataImage) => {
          return new Promise((resolve, reject) => {
               console.log(dataImage)

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
                                                            db.query(`INSERT INTO users_detail(nama, email, image) VALUES('${name}','${email}', '${dataImage}')`,
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
                                                                                                    const verify = uuidv1()

                                                                                                    db.query(`INSERT INTO user_privat(username, password, id_users_detail, id_user_class, verify) VALUES('${username}','${password}',${maxId},3,'${verify}')`, (error, results, fields) => {
                                                                                                         if (error) {
                                                                                                              resolve({ success: false, message: 'saa' })
                                                                                                         }
                                                                                                         resolve({ success: true, message: 'Berhasil' })

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