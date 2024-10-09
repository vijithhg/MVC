const express = require('express')
const { register } = require('../controllers/userController')
const upload = require('../middlewares/multer')
const router = express.Router()

router.post('/', upload.single('image') , register)



module.exports = router