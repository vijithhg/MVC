const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
const authRoutes = require('./routes/authRoutes')
const welecomeRoute = require('./routes/welcomeRoutes')

const app = express()
app.use(cors())
app.use(bodyParser.json())


app.use('/api/auth',authRoutes)
app.use('/api',welecomeRoute)


//mongoDB connection
mongoose.connect('mongodb://127.0.0.1:27017/userAuthentication-JWT').then(() => {
    console.log('Connected to MongoDB');
  }).catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

app.listen(8000,()=>{
    console.log('server running')
})