const { Router } = require('express')
const router = Router()

const { signIn, signUp } = require('../controllers/auth.controller')

router.post('/signup', signUp)
router.post('/signin', signIn)

module.exports = router
