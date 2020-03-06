const Register = require('../models/register')
const bcrypt = require('bcryptjs')

const registerUser = async (req, res) => {
  const { name, username, password, email, } = req.body
  const encryptedPassword = bcrypt.hashSync(password)
  try {
    const { reg, message } = await Register.register(name, username, encryptedPassword, email)
    if (reg) {
      res.send({ success: true, msg: 'Register has been created!' })
    } else {
      res.send({ success: false, msg: message })
    }
  } catch (error) {
    res.send({ success: false, msg: message })
  }
}

module.exports = {
  registerUser
}