const db = require('../config/db')

module.exports = {
    get: (id) => {
        if (id) {
            return new Promise((resolve, reject) => {
                const query = `SELECT restaurant.id, restaurant.restaurant, menu_food.food, menu_food.price FROM restaurant JOIN menu_food ON menu_food.id=restaurant.id WHERE restaurant.id=${id}`
                db.query(query, (error, result, field) => {
                    if (error) reject = new Error(error)
                    resolve(result[0])
                })
            })
        } else {
            return new Promise((resolve, reject) => {
                db.query(`SELECT restaurant.id, restaurant.restaurant, menu_food.food, menu_food.price FROM restaurant JOIN menu_food ON menu_food.id=restaurant.id`, (error, result, field) => {
                    if (error) reject = new Error(error)
                    resolve(result)
                })
            }
            )
        }
    },

    Food: (id, searchFood) => {
        if (id) {
            return new Promise((resolve, reject) => {
                const query = `SELECT menu_food.id, restaurant.restaurant, menu_food.food, menu_food.price FROM menu_food JOIN restaurant ON menu_food.id_restaurant=restaurant.id where menu_food.id=${id}`
                db.query(query, (error, result, field) => {
                    if (error) reject = new Error(error)
                    resolve(result[0])
                })
            })
        }
        if (searchFood) {
            return new Promise((resolve, reject) => {
                const query = `SELECT menu_food.id, restaurant.restaurant, menu_food.food, menu_food.price FROM menu_food JOIN restaurant ON menu_food.id_restaurant=restaurant.id where menu_food.food LIKE '%${searchFood}%'`
                db.query(query, (error, result, field) => {
                    if (error) reject = new Error(error)
                    resolve(result[0])
                })
            })
        } else {
            return new Promise((resolve, reject) => {
                const query = `SELECT menu_food.id, restaurant.restaurant, menu_food.food, menu_food.price FROM menu_food JOIN restaurant ON menu_food.id_restaurant=restaurant.id`
                db.query(query, (error, result, field) => {
                    if (error) reject = new Error(error)
                    resolve(result)

                })
            }
            )
        }
    },


    Drink: (id) => {
        if (id) {
            return new Promise((resolve, reject) => {
                const query = `SELECT menu_drink.id, restaurant.restaurant, menu_drink.drink, menu_drink.drink, menu_drink.price_drink FROM menu_drink JOIN restaurant ON menu_drink.id_restaurant=restaurant.id where menu_drink.id=${id}`
                db.query(query, (error, result, field) => {
                    if (error) reject = new Error(error)
                    resolve(result[0])
                })
            })
        } else {
            return new Promise((resolve, reject) => {
                const query = `SELECT menu_drink.id, restaurant.restaurant, menu_drink.drink, menu_drink.drink, menu_drink.price_drink FROM menu_drink JOIN restaurant ON menu_drink.id_restaurant=restaurant.id`
                db.query(query, (error, result, field) => {
                    if (error) reject = new Error(error)
                    resolve(result)

                })
            }
            )
        }
    },

}