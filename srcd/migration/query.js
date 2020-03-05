const { db } = require('../config/db')

/* Get ARRAY OF QUERY TABLES */
const migrate = require('./migrate.js')


db.query(`${migrate.map(v => `${v}`).join(';')}
`, (err, results, field) => {
    if (err) {
        console.log(err)
    } else {
        console.log('Migrate Succes')
    }
})

db.end()