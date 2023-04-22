const { Router } = require('express')
const router = Router()
const { postComments } = require('../controllers/coments.controller')
const { verifyToken, isAdmin } = require('../middlewares/authJwt')

router.post('/', [verifyToken, isAdmin], postComments)
module.exports = router
