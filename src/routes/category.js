const category = require('express').Router()

const { getCategory, getAllCategory, deleteCategory, createCategory, updateCategory } = require('../controller/category')

category.get('/', getAllCategory)
// category.get('/food/:searchFood', getFood)
category.get('/:id', getCategory)
category.post('/', createCategory)
category.patch('/', updateCategory)
category.delete('/', deleteCategory)

module.exports = {
    category
}