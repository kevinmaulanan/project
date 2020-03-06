const forgotPassword = require('express').Router()
const { fpassword } = require('../controller/forgotPassword')

forgotPassword.post('/', fpassword)

module.exports = {
    forgotPassword
}