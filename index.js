const express = require('express')
const bodyParser = require('body-parser')

const { checkAuthToken, checkPermission } = require('./src/middlawer/AuthMiddlawer')
// const { checkUserClass } = require('./src/users/classUser.js')

const { User } = require('./src/routes/user')
const { Auth } = require('./src/routes/auth')
const { Restaurant } = require('./src/routes/restaurant')
// const { Food } = require('./src/routes/food')
const { Items } = require('./src/routes/items')
// const { resFood } = require('./src/routes/resFood')
const { category } = require('./src/routes/category')
const { Register } = require('./src/routes/register')
const { forgotPassword } = require('./src/routes/forgotPassword')
// const { Items } = require('./src/routes/items')
const { migration } = require('./src/routes/migrations')



const app = express()

/* Middleware */

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// app.use('/check', checkPermission)
app.use('/user', checkAuthToken, User)
app.use('/restaurant', Restaurant)
// app.use('/restaurant/food', Food)
app.use('/items', Items)
app.use('/auth', Auth)
app.use('/register', Register)
app.use('/category', category)

// app.use('/restaurant/foodd', checkAuthToken, resFood)
app.use('/forgot-password', forgotPassword)


app.use('/migration', migration)

app.get('/', (req, res) => {
    res.send('Server is Running')
})

app.listen(3333, () => {
    console.log('Server Running at Port 3333')
})
