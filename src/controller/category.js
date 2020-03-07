const processCategory = require('../models/category')

const getCategory = async (req, res) => {
    const { id } = req.body
    const data = await processCategory.get(id)
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

const getAllCategory = async (req, res) => {
    const data = await processCategory.get()
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

const createCategory = async (req, res) => {
    const { category_detail, id_category } = req.body
    const { success, message } = await processCategory.create(category_detail, id_category)
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

const updateCategory = async (req, res) => {
    const { id, category_detail, id_category } = req.body
    const { success, message } = await processCategory.update(id, category_detail, id_category)
    console.log(success)
    try {
        if (success) {
            res.send({
                success: true,
                message: 'Succes Update Data Category'
            })
        } else {
            res.send({
                success: false,
                message
            })
        }
    } catch (error) {
        res.send({ success: false, message })
    }
}

const deleteCategory = async (req, res) => {
    const { id } = req.body
    const { success, message } = await processCategory.delete(id)
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
        res.send({ success: false, message })
    }
}


module.exports = {
    getCategory,
    getAllCategory,
    createCategory,
    updateCategory,
    deleteCategory
}