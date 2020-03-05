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

const getMenu = async (req, res) => {
  const params = {
    search: req.query.search || ''
  }
  if (req.query.search) {
    const key = Object.keys(params.search)
    params.search = key.map((v, i) => (
      { keys: key[i], value: req.query.search[key[i]] }
    )
    )
  }
  const { id, food, drink } = req.params
  const data = await user.get(id, food, drink)
  if (data) {
    res.send({
      success: true,
      data
    })
  } else {
    res.send({
      success: false,
      msg: 'error'
    })
  }
}

const getAllMenu = async (req, res) => {
  const data = await user.get()
  if (data) {
    res.send({
      success: true,
      msg: 'Data Berhasil',
      data
    })
  } else {
    req.send({
      success: false,
      msg: 'error'
    })
  }
}

// const GetDetailMenu = async (req, res) => {
//   const { menu } = req.params
//   const detail = await user.get(id)
//   if (detail) {
//     res.send({
//       success: true,
//       data: detail
//     })
//   } else {
//     res.send({
//       success: false,
//       data: `There is no User with id ${id}`
//     })
//   }
// }


module.exports = {
  CreateDataAuth,
  getAllMenu,
  getMenu
}
