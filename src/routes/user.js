const User = require('express').Router()
const { getAllUser, getUser } = require('../controller/user')

User.get('/:id', getUser)

User.get('/', getAllUser)

module.exports = { User }
