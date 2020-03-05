const user = require('../models/models')
console.log(user)
const bcrypt = require('bcryptjs')

const CreateDataAuth = async (req, res) => {

    const { username, password, level } = req.body
    console.log(username)
    console.log('woi')
    const encryptedPassword = bcrypt.hashSync(password)
    try {
        const createAuth = await user.create(username, encryptedPassword, level)
        if (createAuth) {
            res.send({ success: true, msg: 'User has been created!' })
        } else {
            res.send({ success: false, msg: 'Failed to create user!' })
        }
    } catch (error) {
        res.send({ success: false, msg: error })
    }
}

module.exorts = {
    CreateDataAuth
}