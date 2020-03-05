const User = require('express').Router()
const { CreateDataAuth, getAllMenu, getMenu } = require('../controller/user')

console.log(CreateDataAuth)

User.post('/', CreateDataAuth)

User.get('/:id', getMenu)

User.get('/', getAllMenu)

module.exports = { User }
