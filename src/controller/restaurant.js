const restaurant = require('../models/restaurant')

const getResto = async (req, res) => {
    const { id } = req.params
    const data = await restaurant.Resto(id)
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
    const data = await restaurant.Resto()
    if (data) {
        res.send({
            success: true,
            msg: 'Data Berhasil',
            data
        })
    } else {
        req.send({
            success: false,
            msg: 'error'
        })
    }
}


const getFood = async (req, res) => {
    const { id } = req.params
    const data = await restaurant.Food(id)
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

const getAllFood = async (req, res) => {
    const data = await restaurant.Food()
    console.log(data)
    if (data) {
        res.send({
            success: true,
            msg: 'Data Berhasil',
            data
        })
    } else {
        req.send({
            success: false,
            msg: 'error'
        })
    }
}




module.exports = {
    getResto,
    getAllResto,
    getFood,
    getAllFood
}