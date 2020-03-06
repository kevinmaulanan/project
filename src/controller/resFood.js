// const resFood = require('../models/resFood')

// const Food = async (req, res) => {
//     const { id } = req.params
//     const data = await resFood.get(id)
//     if (data) {
//         res.send({
//             success: true,
//             data
//         })
//     } else {
//         res.send({
//             success: false,
//             msg: 'error'
//         })
//     }
// }

// const FoodAll = async (req, res) => {
//     const data = await resFood.get()
//     if (data) {
//         res.send({
//             success: true,
//             data
//         })
//     } else {
//         res.send({
//             success: false,
//             msg: 'error'
//         })
//     }
// }
// module.exports = {
//     Food,
//     FoodAll
// }