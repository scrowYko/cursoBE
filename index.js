const express = require('express')
const connectDB = require('./db')

const app = express()

connectDB()

app.get('/test-api', function (req, res) {
    res.send('Nossa api ta funfando')
})


app.listen(8000)
