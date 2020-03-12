const authPassword = require('express').Router()
const { changePassword, forgotPassword, checkUsername } = require('../controller/authPassword')

authPassword.get('/verify', checkUsername)
authPassword.post('/forgot-password', forgotPassword)
authPassword.post('/change-password', changePassword)

module.exports = {
    authPassword
}