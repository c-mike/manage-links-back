const router = require('express').Router()
const link = require('./controllers/link_c')
const validate = require('./middlewares/validate')
const {add_lk, id} = require('./helpers/schemas')

router.get('/',(req, res)=>{res.send("manage-links-back")})
router.get('/all', link.all)
router.post('/add', add_lk, validate, link.add)
router.delete('/remove', id, validate, link.remove)
router.post('/edit', id, add_lk, validate, link.edit)

module.exports = router
