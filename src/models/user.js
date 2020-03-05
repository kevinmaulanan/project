const db = require('../config/db')

module.exports = {
  create: (username, password, level) => {
    return new Promise((resolve, reject) => {
      db.query(`SELECT COUNT(*) as total FROM users WHERE username = '${username}' LIMIT 1`,
        (error, results, fields) => {
          if (!error) {
            const { total } = results[0]
            if (total !== 0) {
              resolve(false)
            } else {
              // const hashpassword = bcrypt.hashSync('${password}', salt) '${hashpassword}'
              db.query(`INSERT INTO users(username, password, level) VALUES('${username}','${password}', ${level})`,
                (error, result, fields) => {
                  if (error) {
                    console.log(error)
                    reject(new Error(error))
                  }
                  resolve(true)
                })
            }
          } else {
            reject(new Error(error))
          }
        })
    })
  },
  get: (id, food, drink) => {
    console.log(id)
    if (id) {
      return new Promise((resolve, reject) => {
        db.query(`SELECT restaurant.id, restaurant.restaurant, menu_food.food, menu_food.price, menu_drink.drink, menu_drink.price FROM restaurant JOIN menu_food ON menu_food.id=restaurant.id JOIN menu_drink ON menu_drink.id=restaurant.id WHERE restaurant.id=${id}`, (error, result, field) => {
          if (error) reject = new Error(error)
          resolve(result[0])
        })
      })
    }
    else if (require.params === food) {
      return new Promise((resolve, reject) => {
        db.query(`SELECT restaurant.id, restaurant.restaurant, menu_food.food, menu_food.price FROM restaurant JOIN menu_food ON menu_food.id=restaurant.id JOIN menu_drink ON menu_drink.id=restaurant.id`, (error, result, field) => {
          if (error) reject = new Error(error)
          resolve(result[0])
        })
      })
    }
    else if (drink) {
      return new Promise((resolve, reject) => {
        db.query(`SELECT restaurant.id, restaurant.restaurant, menu_food.food, menu_food.price FROM restaurant JOIN menu_food ON menu_food.id=restaurant.id JOIN menu_drink ON menu_drink.id=restaurant.id WHERE restaurant.id=${id}`, (error, result, field) => {
          if (error) reject = new Error(error)
          resolve(result[0])
        })
      })
    }
    else {
      return new Promise((resolve, reject) => {
        db.query(`SELECT restaurant.id, restaurant.restaurant, menu_food.food, menu_food.price, menu_drink.drink, menu_drink.price FROM restaurant JOIN menu_food ON menu_food.id=restaurant.id JOIN menu_drink ON menu_drink.id=restaurant.id`, (error, result, field) => {
          if (error) reject = new Error(error)
          resolve(result)
        })
      }
      )
    }
  }
}