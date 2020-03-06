const Restaurant = require('express').Router()
const { getMenu, getAllMenu } = require('../controller/restaurant')


Restaurant.get('/:id', getMenu)
Restaurant.get('/food', getAllMenu)

module.exports = {
    Restaurant
}

