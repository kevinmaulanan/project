const Guest = require('express').Router()

const { getAllItems, getAllRestaurant, getAllCategory, getItems, getRestaurant, getCategory } = require('../controller/guest')


Guest.get('/browse_items', getAllItems)
Guest.get('/browse_restaurant', getAllRestaurant)
Guest.get('/browse_category', getAllCategory)
Guest.get('/browse_items/:id', getItems)
Guest.get('/browse_restaurant/:id', getRestaurant)
Guest.get('/browse_category/:id', getCategory)


module.exports = {
    Guest
}