const express = require('express')
const app = express()
const errorMiddleware = require('./middlewares/error')
const cors = require('cors');
app.use(express.json())
// Use CORS middleware
app.use(cors());
//Import all routes

const products = require('./routes/product')

app.use('/api/v1', products)

//Middleware to handle errors
app.use(errorMiddleware)

module.exports = app