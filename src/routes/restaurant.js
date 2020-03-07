const Restaurant = require('express').Router()
const { getResto, getAllResto, getFood, getAllFood } = require('../controller/restaurant')



Restaurant.get('/food', getAllFood)
Restaurant.get('/:id', getResto)
Restaurant.get('/', getAllResto)

Restaurant.get('/food/:id', getFood)


module.exports = {
    Restaurant
}

