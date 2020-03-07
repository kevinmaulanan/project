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
    const data = await processCategory.create(category_detail, id_category)
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

const updateCategory = async (req, res) => {
    const { id, category_detail, id_category } = req.body
    const data = await processCategory.update(id, category_detail, id_category)
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

const deleteCategory = async (req, res) => {
    const { id } = req.body
    const data = await processCategory.delete(id)
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


module.exports = {
    getCategory,
    getAllCategory,
    createCategory,
    updateCategory,
    deleteCategory
}