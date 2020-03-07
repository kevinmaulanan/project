const forgotPassword = require('express').Router()
const { fpassword } = require('../controller/forgotPassword')

forgotPassword.patch('/', fpassword)

module.exports = {
    forgotPassword
}