const User = require('express').Router()
const {
    CreateDataAuth
} = require('../controllers/controllers')
User.post('/', CreateDataAuth)

module.exports = { User }
