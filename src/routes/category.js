const category = require('express').Router()

const { getCategory } = require('../controller/category')

category.get('/', getCategory)
category.get('/:id', getCategory)

module.exports = {
    category
}