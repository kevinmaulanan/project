const processItems = require('../models/items')
const { paginate } = require('../pagination/pagination')


const getItems = async (req, res) => {
    const { id } = req.params
    const { success, message, data } = await processItems.getItems(id)
    try {
        if (success) {
            res.send({
                success: true,
                message,
                data
            })
        } else {
            res.send({
                success: false,
                message
            })
        }
    } catch (error) {
        success,
            message
    }
}


const getAllItems = async (req, res) => {
    const { success, message, result, total } = await processItems.getAllItems(req)
    const pagination = paginate(req, 'items', total)
    try {
        if (success) {
            res.send({
                success: true,
                message,
                result,
                pagination
            })
        } else {
            res.send({
                success: false,
                msg: 'error'
            })
        }
    } catch (error) {
        success,
            message
    }
}


const addItems = async (req, res) => {
    const { name, quantity, price, id_category_detail, id_restaurant } = req.body
    const { success, message, field } = await processItems.createItems(name, quantity, price, id_category_detail, id_restaurant)
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
    const { id } = req.params
    console.log(id)
    const { name, quantity, price, id_category_detail, id_restaurant } = req.body
    const data = await processItems.updateItems(id, name, quantity, price, id_category_detail, id_restaurant)
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