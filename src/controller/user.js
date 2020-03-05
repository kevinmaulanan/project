const user = require('../models/user')
const bcrypt = require('bcryptjs')

const CreateDataAuth = async (req, res) => {
  const { username, password, level } = req.body
  const encryptedPassword = bcrypt.hashSync(password)
  try {
    const create = await user.create(username, encryptedPassword, level)
    if (create) {
      res.send({ success: true, msg: 'User has been created!' })
    } else {
      res.send({ success: false, msg: 'Failed to create user!' })
    }
  } catch (error) {
    res.send({ success: false, msg: error })
  }
}


module.exports = {
  CreateDataAuth
}
