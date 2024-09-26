const express = require('express')
const { getAllUsers, createUser,getUserById, deleteUserById, updateUserById } = require('../controllers/userController')
const router = express.Router()

router.post('/users',createUser)
router.get('/users',getAllUsers)
router.get('/users/:id',getUserById)
router.delete('/users/:id',deleteUserById)
router.put('/users/:id',updateUserById)



module.exports = router