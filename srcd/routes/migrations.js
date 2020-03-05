const migrations = require('express').Router()

migrations.get('/user', (req, res) => {
    require('../migration/migrations')
    res.send('OK')
})

module.exports = { migrations }
