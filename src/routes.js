const router = require('express').Router()
const link = require('./src/controllers/link')

router.get('/all', link.all)
router.post('/add', link.add)
router.delete('/remove', link.remove)
router.post('/edit', link.edit)

module.exports = router
