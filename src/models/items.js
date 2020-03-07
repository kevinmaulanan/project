const db = require('../config/db')

module.exports = {

    getItems: (id, searchItems) => {
        if (id) {
            return new Promise((resolve, reject) => {
                const query = `SELECT items.id, category.category, category_detail.category_detail, items.name, items.quantity, items.price FROM items JOIN category_detail ON category_detail.id=items.id_category_detail JOIN category ON category.id=category_detail.id_category where items.id=${id}`
                db.query(query, (error, result, field) => {
                    if (error) reject = new Error(error)
                    resolve(result[0])
                })
            })
        }
        if (searchItems) {
            return new Promise((resolve, reject) => {
                const query = `SELECT items.id, category.category, category_detail.category_detail, items.name, items.quantity, items.price FROM items JOIN category_detail ON category_detail.id=items.id_category_detail JOIN category ON category.id=category_detail.id_category where items.name LIKE '%${searchItems}%'`
                db.query(query, (error, result, field) => {
                    if (error) reject = new Error(error)
                    resolve(result[0])
                })
            })
        } else {
            return new Promise((resolve, reject) => {
                const query = `SELECT items.id, category.category, category_detail.category_detail, items.name, items.quantity, items.price FROM items JOIN category_detail ON category_detail.id=items.id_category_detail JOIN category ON category.id=category_detail.id_category`
                db.query(query, (error, result, field) => {
                    if (error) reject = new Error(error)
                    resolve(result)

                })
            }
            )
        }
    },


    createItems: (name, quantity, price, id_category_detail) => {
        return new Promise((resolve, reject) => {
            db.query(`SELECT COUNT(*) as total FROM items where name='${name}'`, (error, result, field) => {
                if (!error) {
                    const { total } = result[0]
                    if (total > 0) {
                        resolve({ success: false, message: 'Name Already exist' })
                    }
                    else {
                        db.query(`INSERT INTO items(name,quantity,price,id_category_detail) Values('${name}',${quantity},${price},${id_category_detail})`, (error, result, field) => {
                            if (error) {
                                resolve({ success: false, message: 'There was an error entering data into the database ' })
                            } else {
                                resolve({ success: true, message: 'data has been added', result })
                            }
                        })
                    }
                }
            })
        })
    },


    updateItems: (id, name, quantity, price, id_category_detail) => {
        return new Promise((resolve, reject) => {
            db.query(`SELECT Count(*) as total FROM items where id=${id}`, (error, result, field) => {
                if (!error) {
                    const { total } = result[0]
                    if (total === 0) {
                        resolve({ success: false, message: 'Id not found' })
                    } else {
                        db.query(`UPDATE items SET name= '${name}', quantity= ${quantity}, price= ${price}, id_category_detail= ${id_category_detail} where id=${id}`, (error, result, field) => {
                            if (error) {
                                resolve({ success: false, message: 'Query False' })
                            } else {
                                resolve({ success: true, message: 'Data has been Updated' })
                            }
                        })
                    }
                }
            })
        })
    },


    deleteItemss: (id) => {
        return new Promise((resolve, reject) => {
            db.query(`SELECT COUNT(*) as total FROM items where id=${id}`, (error, result, field) => {
                if (!error) {
                    const { total } = result[0]
                    if (total === 0) {
                        resolve({ success: false, message: 'ID not Found' })
                    } else {
                        db.query(`Delete FROM items where id=${id}`, (error, result, field) => {
                            if (error) {
                                resolve({ success: false, message: 'failed to delete failed due to an error in the query' })
                            } else {
                                resolve({ success: true, message: 'Data has been deleted' })
                            }
                        })
                    }
                }
            })
        })
    },
    // Drink: (id) => {
    //     if (id) {
    //         return new Promise((resolve, reject) => {
    //             const query = `SELECT menu_drink.id, restaurant.restaurant, menu_drink.drink, menu_drink.drink, menu_drink.price_drink FROM menu_drink JOIN restaurant ON menu_drink.id_restaurant=restaurant.id where menu_drink.id=${id}`
    //             db.query(query, (error, result, field) => {
    //                 if (error) reject = new Error(error)
    //                 resolve(result[0])
    //             })
    //         })
    //     } else {
    //         return new Promise((resolve, reject) => {
    //             const query = `SELECT menu_drink.id, restaurant.restaurant, menu_drink.drink, menu_drink.drink, menu_drink.price_drink FROM menu_drink JOIN restaurant ON menu_drink.id_restaurant=restaurant.id`
    //             db.query(query, (error, result, field) => {
    //                 if (error) reject = new Error(error)
    //                 resolve(result)

    //             })
    //         }
    //         )
    //     }
    // },

}