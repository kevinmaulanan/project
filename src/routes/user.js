const User = require('express').Router()
const { getAllUser, getUser, deleteUser } = require('../controller/user')

const { checkAuthToken } = require('../middlawer/AuthMiddlawer')
const { checkAuthPermission } = require('../middlawer/AuthPermission')

User.get('/:id', checkAuthToken, checkAuthPermission, getUser)

User.get('/', checkAuthToken, checkAuthPermission, getAllUser)

User.delete('/:id', checkAuthToken, checkAuthPermission, deleteUser)

module.exports = { User }
