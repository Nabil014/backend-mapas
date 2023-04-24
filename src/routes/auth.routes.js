const { Router } = require('express')
const router = Router()

const { singIn, singUp } = require('../controllers/auth.controller')

router.post('/singup', singUp)
router.post('/singin', singIn)

module.exports = router
