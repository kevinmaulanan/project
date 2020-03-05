const db = require('../config/db')

const userAuth = `CREATE TABLE users_auth(
    id int(11) PRIMARY KEY AUTO_INCREMENT,
    name varchar(60),
    username varchar(40),
    password varchar(48),
    created_at datetime DEFAULT CURRENT_TIMESTAMP,
    updated_at datetime ON UPDATE CURRENT_TIMESTAMP.
    level int(11),
    )`

const levelAuth = `CREATE TABLE user_level(
    id int(11) PRIMARY KEY AUTO_INCREMENT,
    level int(11),
    created_at datetime DEFAULT CURRENT_TIMESTAMP,
    updated_at datetime ON UPDATE CURRENT_TIMESTAMP
)`

const restaurant = `CREATE TABLE restaurant(
    id int(11) PRIMARY KEY AUTO_INCREMENT,
    name varchar(60),
    id_menu (11),
    created_at datetime DEFAULT CURRENT_TIMESTAMP,
    updated_at datetime ON UPDATE CURRENT_TIMESTAMP,
    id_makanan(11)
)`

const menuRes = `CREATE TABLE menu_res(
    id int(11) PRIMARY KEY AUTO_INCREMENT,
    makanan varchar(60),
    minuman varchar(60),
    harga int(48)
)`

db.query(`${userAuth}; ${levelAuth};`)


