const user = require('../models/user')
const bcrypt = require('bcryptjs')

const CreateUser = async (req, res) => {
  const { name, username, password, email, } = req.body
  const encryptedPassword = bcrypt.hashSync(password)
  try {
    const { create, message } = await user.create(name, username, encryptedPassword, email)
    if (create) {
      res.send({ success: true, msg: 'User has been created!' })
    } else {
      res.send({ success: false, msg: mesasage })
    }
  } catch (error) {
    res.send({ success: false, msg: error })
  }
}

const updateUserPassword = async (req, res) => {

  const { id } = req.params
  const key = Object.keys(req.body)
  const fillable = ['name', 'username', 'old_password']
  let params = key.map((v, i) => {
    if (v && fillable.includes(key[i])) {
      if (req.body[key[i]]) {
        return { keys: key[i], value: req.body[key[i]] }
      } else {
        return null
      }
    } else {
      return null
    }
  }).filter(o => o)

  try {
    if (req.body.old_password) {
      const getUser = await user.get(id)
      const oldPassword = getUser.password
      const compare = bcrypt.compareSync(req.body.old_password, oldPassword)
      if (req.body.new_password === req.body.confirm_password) {
        if (compare) {
          params = params.map(o => {
            if (o.keys === 'old_password') {
              return { keys: 'password', value: bcrypt.hashSync(req.body.new_password) }
            } else {
              return o
            }
          })

          const update = await user.update(id, params)
          if (update) {
            res.send({
              success: true,
              msg: `User with id ${id} has beed Updated`
            })
          } else {
            res.send({
              success: false,
              msg: 'Failed to update user'
            })
          }
        } else {
          res.send({
            success: false,
            msg: 'Wrong Old Password'
          })
        }
      } else {
        res.send({
          success: false,
          msg: 'Wrong New_Password dan Confirm_Password tidak Sama'
        })
      }
    } else {
      req.send({
        success: false,
        msg: 'Confirm Password doesnt match!'
      })
    }
  } catch (e) {
    res.send({
      success: false,
      msg: e.message
    })
  }
}



const getUser = async (req, res) => {
  const { id } = req.params
  const detail = await user.get(id)
  if (detail) {
    res.send({
      success: true,
      data: detail
    })
  } else {
    res.send({
      success: false,
      data: `There is no User with id ${id}`
    })
  }
}

const getAllUser = async (req, res) => {
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

module.exports = {
  CreateUser,
  updateUserPassword,
  getUser,
  getAllUser
}
