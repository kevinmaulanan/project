const forPassword = require('../models/forgotPassword')
const fpassword = async (req, res) => {
    const { username, password, newPassword } = req.body
    const update = await forPassword.update(username, password, newPassword)
    try {
        if (update) {
            res.send({
                success: true,
                message: 'Password has been Updated'
            })
        }
        else {
            res.send({
                success: false,
                message: 'Password not Updated'
            })
        }
    } catch (error) {
        res.send({
            success: false,
            message
        })
    }
}
module.exports = {
    fpassword
}