const db = require('../config/db')

module.exports = {
    Resto: (id) => {
        if (id) {
            return new Promise((resolve, reject) => {
                const query = `SELECT *FROM restaurant where id=${id}`
                db.query(query, (error, result, field) => {
                    if (error) reject = new Error(error)
                    resolve(result[0])
                })
            })
        } else {
            return new Promise((resolve, reject) => {
                db.query(`SELECT *FROM restaurant`, (error, result, field) => {
                    if (error) reject = new Error(error)
                    resolve(result)
                })
            }
            )
        }
    },


    Food: (id) => {
        if (id) {
            return new Promise((resolve, reject) => {
                const query = `SELECT menu_food.id, restaurant.restaurant, menu_food.food, menu_food.price FROM menu_food JOIN restaurant ON menu_food.id_restaurant=restaurant.id where menu_food.id=${id}`
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





}