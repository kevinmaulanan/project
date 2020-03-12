const Auth = require('express').Router()
const jwt = require('jsonwebtoken')
const db = require('../config/db')
const bcrypt = require('bcryptjs')

require('dotenv').config()

Auth.post('/login', (req, res) => {
  const { username, password } = req.body
  if (username && password) {
    db.query(`SELECT COUNT(*) as total FROM user_privat where username='${username}'`, (error, result, field) => {
      const { total } = result[0]
      if (total === 0) {
        res.send({
          success: false,
          message: 'Username not Found '
        })
      } else {
        db.query(`SELECT *FROM user_privat where username='${username}'`, (error, result, field) => {
          const pwData = result[0].password
          const comparePassword = bcrypt.compareSync(password, pwData)
          console.log(comparePassword)
          if (comparePassword === false) {
            res.send({
              success: false,
              message: 'Wrong Password!!'
            })
          } else {
            db.query(`SELECT user_privat.id, user_privat.username, users_detail.nama, users_detail.email, users_detail.image, users_detail.age, users_detail.tall, users_detail.weight, user_class.class_user, user_privat.id_users_detail FROM user_privat JOIN user_class ON user_privat.id_user_class = user_class.id JOIN users_detail ON user_privat.id_users_detail=users_detail.id where user_privat.username='${username}' `, (error, result, fields) => {
              console.log(result[0].class_user)
              if (error) {
                res.send({ success: false, message: 'query false' })
              }
              else {
                role = result[0].class_user
                console.log(role)
                if ((role === 'SuperAdmin') || (role === 'Admin') || (role === 'Costumer')) {
                  const data = result[0]
                  console.log(data)
                  const getUser = { ...data }
                  const token = jwt.sign(getUser, process.env.APP_KEY, { expiresIn: '1h' })
                  res.send({
                    success: true,
                    msg: 'Login Berhasil',
                    data: {
                      token
                    }
                  })
                }
                else {
                  res.send({ success: false, message: 'Anda bukan UserAdmin, Admin atau Costumer' })
                }
              }
            })
          }
        })
      }
    })
  }
})

module.exports = { Auth }
