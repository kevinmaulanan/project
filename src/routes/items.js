const Items = require('express').Router()

const { getItems, addItems, updateItems, deleteItems, getAllItems } = require('../controller/items')


Items.delete('/', deleteItems)


Items.patch('/', updateItems)

Items.get('/', getAllItems)
Items.get('/:id', getItems)
Items.get('/:searchFood', getItems)


Items.post('/', addItems)




module.exports = {
    Items
}