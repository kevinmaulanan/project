const db = require('../config/db')
// const bcrypt = require('bcryptjs')
// const salt = bcrypt.genSaltSync(10)
// const bcrypt = require('bcryptjs')

module.exports = {
  get: (id, params) => {
    if (id) {
      return new Promise((resolve, reject) => {
        db.query(`SELECT *FROM users WHERE id=${id}`, (error, result, fields) => {
          if (error) reject(new Error(error))
          resolve(result[0])
        })
      })
    } else {
      return new Promise((resolve, reject) => {
        const { perPage, currentPage, search, sort } = params
        const condition = `
        ${search && `WHERE ${search.map(v => `${v.keys} LIKE '${v.value}%'`).join(' AND ')}`} 
        ORDER BY ${sort.keys} ${!sort.value ? 'ASC' : 'DESC'} 
        ${(currentPage && perPage) && `LIMIT ${perPage} OFFSET ${parseInt(perPage) * ((parseInt(currentPage) - 1))}`}`
        // console.log(condition)

        const query = `SELECT COUNT(*) AS total FROM users ${condition.slice(0, condition.indexOf('LIMIT'))}`
        db.query(query, (error, results, fields) => {
          if (error) {
            reject(new Error(error))
          }
          const { total } = results[0]

          const query = `SELECT *FROM users ${condition}`
          db.query(query, (error, results, fields) => {
            if (error) {
              reject(new Error(Error))
            }
            resolve({ results, total })
          })
        })
      })
    }
  },
  create: (name, username, password) => {
    return new Promise((resolve, reject) => {
      db.query(`SELECT COUNT(*) as total FROM users WHERE username = '${username}' LIMIT 1`,
        (error, results, fields) => {
          if (!error) {
            const { total } = results[0]
            console.log({ total })
            if (total !== 0) {
              resolve(false)
            } else {
              // const hashpassword = bcrypt.hashSync('${password}', salt) '${hashpassword}'
              db.query(`INSERT INTO users(name, username, password) VALUES('${name}', '${username}','${password}' )`,
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

  delete: (id) => {
    return new Promise((resolve, reject) => {
      db.query(`SELECT COUNT(*) as total FROM users WHERE id = ${id} `,
        (error, results, fields) => {
          if (!error) {
            const { total } = results[0]
            if (total === 0) {
              resolve(false)
            } else {
              db.query(`DELETE FROM users WHERE id = ${id} `,
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
  update: (id, params) => {
    return new Promise((resolve, reject) => {
      db.query(`SELECT COUNT(*) as total FROM users WHERE id = ${id} `,
        (error, results, fields) => {
          if (!error) {
            const { total } = results[0]
            if (total === 0) {
              resolve(false)
            } else {
              db.query(`UPDATE users SET ${params.map(v => `${v.keys} = '${v.value} '`).join(' , ')} WHERE id = ${id} `,
                (error, result, fields) => {
                  if (error) {
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
  }
}
