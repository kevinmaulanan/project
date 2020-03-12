const jwt = require('jsonwebtoken')
require('dotenv').config()

function checkAuthToken(req, res, next) {
  let token = req.headers.authorization || ""
  if (token.startsWith('Bearer')) {
    token = token.slice(7, token.length)
  } else {
    res.send({
      success: false,
      msg: 'Not Authorized'
    })
  }
  try {
    req.auth = jwt.verify(token, process.env.APP_KEY)
    next()
  } catch (e) {
    res.send({
      success: false,
      msg: 'You not Login. Please login!'
    })
  }
}

module.exports = {
  checkAuthToken
}
