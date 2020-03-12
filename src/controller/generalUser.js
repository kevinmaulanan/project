const processGeneralUser = require('../models/generalUser.js')
const qs = require('querystring')

// const params = {
//     currentPage: req.query.page || 1,
//     perPage: req.query.limit || 5,
//     search: req.query.search || '',
//     sort: req.query.sort || { keys: 'name', value: 0 }
// }

// const totalPages = Math.ceil(data.total / parseInt(params.perPage))
// query.page = parseInt(query.page) + 1
// const nextPage = (parseInt(params.currentPage) < totalPages ? process.env.APP_URL.concat('user?').concat(qs.stringify(req.query)) : null)
// console.log(nextPage)

// query.page = parseInt(query.page) - 2
// const previousPage = (parseInt(params.currentPage) > 1 ? process.env.APP_URL.concat('user?').concat(qs.stringify(req.query)) : null)

// const pagination = {
//     currentPage: parseInt(params.currentPage),
//     nextPage,
//     previousPage,
//     totalPages,
//     perPage: parseInt(params.perPage),
//     totalEntries: data.total
// }

const getProfile = async (req, res) => {
    const { id } = req.params
    const { success, message, data } = await processGeneralUser.Profile(id)
    try {
        if (data) {
            res.send({
                success,
                data
            })
        } else {
            res.send({
                success,
                message
            })
        }
    } catch (error) {
        res.send({
            success,
            message
        })
    }
}

const getMyProfile = async (req, res) => {
    const id = req.auth.id
    const { data, success, message } = await processGeneralUser.Profile(id)
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
        res.send({
            success: false,
            message
        })
    }
}

const updateMyProfile = async (req, res) => {
    const id = req.auth.id_users_detail
    const { name, email, image, age, tall, weight } = req.body
    const { data, success, message } = await processGeneralUser.update(id, name, email, image, age, tall, weight)
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
        res.send({
            success: false,
            message
        })
    }
}

const getTopUp = async (req, res) => {
    const id = req.auth.id_users_detail
    const { data, success, message } = await processGeneralUser.Topup(id)
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
        res.send({
            success: false,
            message
        })
    }
}

const getReview = async (req, res) => {
    const id = req.auth.id_items
    const name = req.auth.nama
    const { data, success, message } = await processGeneralUser.getMyReviews(id, name)
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
        res.send({
            success: false,
            message
        })
    }
}

const getAllReviews = async (req, res) => {
    const params = {
        currentPage: req.query.page || 1,
        perPage: req.query.limit || 5,
        search: req.query.search || '',
        sort: req.query.sort || { keys: 'id', value: 0 }
    }
    if (req.query.search) {
        const key = Object.keys(params.search)
        params.search = key.map((v, i) => (
            { keys: key[i], value: req.query.search[key[i]] }
        ))
    }

    const sortkey = Object.keys(params.sort)
    if (req.query.sort) {
        params.sort = sortkey.map((v, i) => (
            { keys: sortkey[i], value: req.query.sort[sortkey[i]] }
        ))
    }

    const { data, total, success, message } = await processGeneralUser.ReviewsAll(params)
    const { query } = req
    if (!query.page) {
        query.page = '1'
    }
    const totalPages = Math.ceil(total / parseInt(params.perPage))
    query.page = parseInt(query.page) + 1
    const nextPage = (parseInt(params.currentPage) < totalPages ? process.env.APP_URL.concat('review/all?').concat(qs.stringify(req.query)) : null)

    query.page = parseInt(query.page) - 2
    const previousPage = (parseInt(params.currentPage) > 1 ? process.env.APP_URL.concat('review/all?').concat(qs.stringify(req.query)) : null)

    const pagination = {
        currentPage: parseInt(params.currentPage),
        nextPage,
        previousPage,
        totalPages,
        perPage: parseInt(params.perPage),
        totalEntries: total
    }

    try {
        if (success) {
            res.send({
                success: true,
                message,
                data,
                pagination
            })
        } else {
            res.send({
                success: false,
                message
            })
        }
    } catch (error) {
        res.send({
            success: false,
            message
        })
    }
}


const addTopUp = async (req, res) => {
    const id = req.auth.id_users_detail
    const { topup } = req.body
    const { totaltopup, success, message } = await processGeneralUser.tambahTopUp(id, topup)
    try {
        if (success) {
            res.send({
                success: true,
                message,
                totaltopup
            })
        } else {
            res.send({
                success: false,
                message
            })
        }
    } catch (error) {
        res.send({
            success: false,
            message
        })
    }
}


const createReviews = async (req, res) => {
    const idUsers = req.auth.id_users_detail
    const { comment, id_items } = req.body
    const { success, message } = await processGeneralUser.createR(idUsers, comment, id_items)
    try {
        if (success) {
            res.send({
                success: true,
                message,

            })
        } else {
            res.send({
                success: false,
                message
            })
        }
    } catch (error) {
        res.send({
            success: false,
            message
        })
    }
}

const getCarts = async (req, res) => {
    const idUser = req.auth.id_users_detail
    const nameUser = req.auth.nama
    const { idItems, quantity } = req.body
    const { success, message, items, harga } = await processGeneralUser.cart(idItems, quantity, idUser, nameUser)
    try {
        if (success) {
            res.send({
                success,
                items,
                harga
            })
        } else {
            res.send({
                success,
                message
            })
        }
    } catch (error) {
        res.send({
            success,
            message
        })
    }
}


const checkout = async (req, res) => {
    const { idCart } = req.body
    const { success, message, SisaTopup } = await processGeneralUser.ProcessCheckOut(idCart)
    try {
        if (success) {
            res.send({
                success,
                message,
                SisaTopup
            })
        } else {
            res.send({
                success,
                message
            })
        }
    } catch (error) {
        res.send({
            success,
            message
        })
    }
}

module.exports = {
    getProfile,
    getMyProfile,
    updateMyProfile,
    getTopUp,
    addTopUp,
    getReview,
    getAllReviews,
    createReviews,
    getCarts,
    checkout

}