const Restaurant = require('express').Router()
const { getMenu, getAllMenu, resFood } = require('../controller/restaurant')


Restaurant.get('/:id', getMenu)
Restaurant.get('/', getAllMenu)
Restaurant.get('/:Food', resFood)

module.exports = {
    Restaurant
}

