const express = require('express')
const { getEmployees, getEmployeeBank } = require('../controllers/employeeController')
const router = express.Router()


router.get('/',getEmployees)

router.get('/bank',getEmployeeBank)



module.exports = router