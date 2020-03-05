const user = require('../models/user')
const bcrypt = require('bcryptjs')
const qs = require('qs')

const GetAllUser = async (req, res) => {
  /* Default Condition */
  console.log(req.query)
  const params = {
    currentPage: req.query.page || 1,
    perPage: req.query.limit || 5,
    search: req.query.search || '',
    sort: req.query.sort || { keys: 'name', value: 0 }
  }

  /* reformating search */
  if (req.query.search) {
    /* object kesy mencari key apa yang akan di search search[name]->name */
    const key = Object.keys(params.search)
    // console.log(key)
    // console.log('hello1')
    params.search = key.map((v, i) => (
      /* key map mengurutkan array(karena database menjadi array) menjadi array angka (0,1,2) */
      /* keys: key[i]->name , value[] */
      { keys: key[i], value: req.query.search[key[i]] }
    )
    )
    // console.log('hello2')
  }

  /* Reformating Sort */
  const sortkey = Object.keys(params.sort)
  // console.log(sortkey)
  if (req.query.sort) {
    params.sort = sortkey.map((v, i) => (
      { keys: sortkey[i], value: req.query.sort[sortkey[i]] }
    ))
  }

  /* get Data From User Model */
  const data = await user.get('', params)
  const { query } = req
  if (!query.page) {
    query.page = '1'
  }
  const totalPages = Math.ceil(data.total / parseInt(params.perPage))
  query.page = parseInt(query.page) + 1
  const nextPage = (parseInt(params.currentPage) < totalPages ? process.env.APP_URL.concat('user?').concat(qs.stringify(req.query)) : null)
  console.log(nextPage)

  query.page = parseInt(query.page) - 2
  const previousPage = (parseInt(params.currentPage) > 1 ? process.env.APP_URL.concat('user?').concat(qs.stringify(req.query)) : null)

  const pagination = {
    currentPage: parseInt(params.currentPage),
    nextPage,
    previousPage,
    totalPages,
    perPage: parseInt(params.perPage),
    totalEntries: data.total
  }

  /* Send Response to End User */
  res.send({
    success: true,
    data: data.results,
    pagination
  })
}

const GetDetailUser = async (req, res) => {
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

const DeleteUser = async (req, res) => {
  const { id } = req.body
  const del = await user.delete(id)
  if (del) {
    res.send({ success: true, msg: `User with id ${id} has been deleted` })
  } else {
    res.send({ success: false, msg: 'Failed to delete User' })
  }
}

const CreateDataUser = async (req, res) => {
  const { name, username, password } = req.body
  const encryptedPassword = bcrypt.hashSync(password)
  try {
    const create = await user.create(name, username, encryptedPassword)
    if (create) {
      res.send({ success: true, msg: 'User has been created!' })
    } else {
      res.send({ success: false, msg: 'Failed to create user!' })
    }
  } catch (error) {
    res.send({ success: false, msg: error })
  }
}

const UpdateDataUser = async (req, res) => {
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

module.exports = {
  GetAllUser,
  GetDetailUser,
  CreateDataUser,
  DeleteUser,
  UpdateDataUser
}
