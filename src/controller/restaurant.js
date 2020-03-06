const restaurant = require('../models/restaurant')

const getMenu = async (req, res) => {
    const params = {
        search: req.query.search || ''
    }
    if (req.query.search) {
        const key = Object.keys(params.search)
        params.search = key.map((v, i) => (
            { keys: key[i], value: req.query.search[key[i]] }
        )
        )
    }
    const { id } = req.params
    const data = await restaurant.get(id)
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

const getAllMenu = async (req, res) => {
    const data = await restaurant.get()
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

const resFood = async (req, res) => {
    const data = await restaurant.get()
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
    getMenu,
    getAllMenu,
    resFood

}