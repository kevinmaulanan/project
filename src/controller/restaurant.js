const processResto = require('../models/restaurant')
const { paginate } = require('../pagination/pagination')

const getResto = async (req, res) => {
    const { id } = req.params
    const data = await processResto.Resto(id)
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

const getAllResto = async (req, res) => {
    const { success, message, data, total } = await processResto.AllResto(req)
    const pagination = paginate(req, 'restaurant', total)
    console.log(paginate)
    console.log(pagination)
    try {
        if (success) {
            res.send({
                success: true,
                message,
                data,
                pagination
            })
        } else {
            req.send({
                success: false,
                msg: 'error'
            })
        }
    } catch (error) {
        success, message
    }
}


const createRestaurant = async (req, res) => {
    const { restaurant, description, id_admin } = req.body


    console.log(req.body)
    const { success, message } = await processResto.create(restaurant, description, id_admin)
    console.log(success)
    console.log(message)
    try {
        if (success) {
            res.send({ success: true, msg: 'Restaurant has been created!' })
        } else {
            res.send({ success: false, message: 'false' })
        }
    } catch (error) {
        res.send({ success: false })
    }
}

const updateRestaurant = async (req, res) => {
    const { id } = req.params
    const { restaurant, description, id_admin } = req.body
    try {
        const { success, message } = await processResto.update(id, restaurant, description, id_admin)
        console.log(success)
        if (success) {
            res.send({ success: true, msg: 'Restorant has ' + restaurant + ' been updated!' })
        } else {
            res.send({ success: false, msg: message })
        }
    } catch (error) {
        res.send({ success: false, msg: message })
    }
}

const deleteRestaurant = async (req, res) => {
    const { id } = req.params
    try {
        const { success, message } = await processResto.delete(id)
        console.log(success)
        if (success) {
            res.send({ success: true, msg: 'Restorant has been deleted!' })
        } else {
            res.send({ success: false, message })
        }
    } catch (error) {
        res.send({ success: false, message })
    }
}




module.exports = {
    getResto,
    getAllResto,
    createRestaurant,
    deleteRestaurant,
    updateRestaurant
}