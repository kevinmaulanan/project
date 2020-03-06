const processCategory = require('../models/category')

const getCategory = async (req, res) => {
    const { id } = req.params
    const data = await processCategory.get(id)
    if (data) {
        res.send({
            success: true,
            data
        })
    } else {
        res.send({
            success: false,
            msg: 'error'
        })
    }
}
module.exports = {
    getCategory
}