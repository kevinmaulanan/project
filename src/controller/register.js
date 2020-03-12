const Register = require('../models/register')
const bcrypt = require('bcryptjs')
const uploads = require('../multer/multer')



const registerUser = async (req, res) => {
  try {
    await uploads(req, res, 'image')
    console.log('woi')
    req.body.images = '/uploads/' + req.file.filename
    // console.log(req.body.images)
    const dataImage = req.body.images

    const { name, username, password, email, } = req.body
    const encryptedPassword = bcrypt.hashSync(password)


    const { success, message } = await Register.register(name, username, encryptedPassword, email, dataImage)
    console.log(success)
    if (success) {
      res.send({ success: true, msg: 'Register has been created!' })
    } else {
      res.send({ success: false, msg: message })
    }
  } catch (error) {
    res.send({ success: false, message })
  }
}

module.exports = {
  registerUser
}