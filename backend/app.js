const express = require('express')
const cors = require('cors')
const employeeRoutes = require('./routes/employeeRoutes')

const app = express()
app.use(cors())


app.use('/employee',employeeRoutes)


app.listen(8000,()=>{
    console.log('server running')
})