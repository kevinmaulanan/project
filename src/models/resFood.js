// const db = require('../config/db')

// module.exports = {
//     get: (id) => {
//         if (id) {
//             return new Promise((resolve, reject) => {
//                 const query = `SELECT restaurant.id, restaurant.restaurant, menu_food.food, menu_food.price FROM restaurant JOIN menu_food ON menu_food.id=restaurant.id WHERE restaurant.id=${id}`
//                 db.query(query, (error, result, field) => {
//                     if (error) reject = new Error(error)
//                     resolve(result[0])
//                 })
//             })
//         } else {
//             return new Promise((resolve, reject) => {
//                 db.query(`SELECT restaurant.id, restaurant.restaurant, menu_drink.drink, menu_drink.price_drink FROM restaurant  JOIN menu_drink ON menu_drink.id=restaurant.id`, (error, result, field) => {
//                     if (error) reject = new Error(error)
//                     resolve(result)
//                 })
//             }
//             )
//         }
//     }
// }