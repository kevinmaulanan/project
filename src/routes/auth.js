const Auth = require('express').Router()
const jwt = require('jsonwebtoken')
const db = require('../config/db')

require('dotenv').config()

Auth.post('/login', (req, res) => {
  const { username, password } = req.body
  if (username && password) {

    if ((username === 'admin') && (password === 'admin')) {
      const data = { email: 'admin@server.com' }
      const token = jwt.sign(data, process.env.APP_KEY, { expiresIn: '15m' })
      res.send({
        success: true,
        msg: 'Login Berhasil',
        data: {
          token
        }
      })
    }
  }
  res.send({
    success: false,
    msg: 'Wrong Password or Username'
  })
})

module.exports = { Auth }
