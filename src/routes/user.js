const User = require('express').Router()
const { CreateDataAuth } = require('../controller/user')

console.log(CreateDataAuth)

User.post('/', CreateDataAuth)

module.exports = { User }
