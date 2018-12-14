const express = require('express')
const mongoose = require('mongoose')
const bodyparser = require('body-parser')
const cheerio = require('cheerio')
const axios = require('axios')
const path = require('path')

const app = express()

const PORT = process.env.PORT || 4000

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/NYT"

mongoose.connect(MONGODB_URI, { useNewUrlParser: true })

app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())

route = require('./routes/apiRoutes')(app)

app.listen(PORT, _ => console.log('http://localhost:4000'))