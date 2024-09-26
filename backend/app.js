const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
const userRoutes = require('./routes/userRoutes')

const app = express()
app.use(cors())
app.use(bodyParser.json())

app.use('/api',userRoutes)


//mongoDB connection
mongoose.connect('mongodb://127.0.0.1:27017/mvc').then(() => {
    console.log('Connected to MongoDB');
  }).catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

app.listen(8000,()=>{
    console.log('server running')
})