const generalUser = require('express').Router()

const { getProfile, getMyProfile, updateMyProfile, getTopUp, addTopUp, getReview, getAllReviews, getCarts, createReviews, checkout } = require('../controller/generalUser')


const { checkAuthToken } = require('../middlawer/AuthMiddlawer')


generalUser.patch('/profile', updateMyProfile)
generalUser.get('/profile', getMyProfile)
generalUser.get('/profile/:id', getProfile)
generalUser.get('/topup', getTopUp)
generalUser.post('/topup/add', addTopUp)
generalUser.post('/carts', getCarts)
// generalUser.get('checkout', getCheckout)
generalUser.get('/review', getReview)
generalUser.get('/review/:id', getAllReviews)
generalUser.get('/review/all', getAllReviews)
generalUser.post('/review', createReviews)
generalUser.post('/checkout', checkout)




// getMyProfile, getProfile, getTopUp, getCarts, getCheckout, getAllReviews, getReview

module.exports = {
    generalUser
}