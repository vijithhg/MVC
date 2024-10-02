const express = require('express')
const { welcomeUser } = require('../controllers/welcomeController')
const { authMiddleWare } = require('../middlewares/authMiddleware')
const router = express.Router()

router.get('/',authMiddleWare, welcomeUser)




module.exports = router