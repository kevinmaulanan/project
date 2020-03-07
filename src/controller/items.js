const processItems = require('../models/items')

const getItems = async (req, res) => {
    const { id, searchItems } = req.params
    const data = await processItems.getItems(id, searchItems)
    if (data) {
        res.send({
            success: true,
            data
        })
    } else {
        res.send({
            success: false,
            msg: 'error'
        })
    }
}


const getAllItems = async (req, res) => {
    const { id, searchItems } = req.params
    const data = await processItems.getItems(id, searchItems)
    if (data) {
        res.send({
            success: true,
            data
        })
    } else {
        res.send({
            success: false,
            msg: 'error'
        })
    }
}


const addItems = async (req, res) => {
    const { name, quantity, price, id_category_detail } = req.body
    const { success, message, field } = await processItems.createItems(name, quantity, price, id_category_detail)
    console.log(success)
    try {
        if (success) {
            res.send({
                success: true,
                message
            })
        } else {
            res.send({
                success: false,
                message
            })
        }
    } catch (error) {
        res.send({ success: false, msg: message })
    }
}

const updateItems = async (req, res) => {
    const { id, name, quantity, price, id_category_detail } = req.body
    const data = await processItems.updateItems(id, name, quantity, price, id_category_detail)
    if (data) {
        res.send({
            success: true,
            data
        })
    } else {
        res.send({
            success: false,
            msg: 'error'
        })
    }
}

const deleteItems = async (req, res) => {
    const { id } = req.body
    const { success, message } = await processItems.deleteItemss(id)
    if (success) {
        res.send({
            success: true,
            message
        })
    } else {
        res.send({
            success: false,
            message
        })
    }
}

module.exports = {
    getItems,
    getAllItems,
    addItems,
    updateItems,
    deleteItems
}