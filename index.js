const express = require('express')
const bodyParser = require('body-parser')

const { checkAuthToken } = require('./src/middlawer/AuthMiddlawer')
// const { checkUserClass } = require('./src/users/classUser.js')

const { User } = require('./src/routes/user')
const { Auth } = require('./src/routes/auth')
const { Restaurant } = require('./src/routes/restaurant')
const { Register } = require('./src/routes/register')

const { migration } = require('./src/routes/migrations')

const app = express()

/* Middleware */

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/user', checkAuthToken, User)
app.use('/restaurant', checkAuthToken, Restaurant)
app.use('/auth', Auth)
app.use('/register', Register)


app.use('/migration', migration)

app.get('/', (req, res) => {
    res.send('Server is Running')
})

app.listen(3333, () => {
    console.log('Server Running at Port 3333')
})
