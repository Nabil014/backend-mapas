const { Router } = require('express')
const router = Router()
const userRoute = require('./register.routes')
const authRoute = require('./auth.routes')
const comentsRoute = require('./coments.routes')

router.use('/api/auth', authRoute)
router.use('/api/user', userRoute)
router.use('/api/coments', comentsRoute)

module.exports = router
