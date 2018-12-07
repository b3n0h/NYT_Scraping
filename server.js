const express = require('express')
const mongoose = require('mongoose')
const bodyparser = require('body-parser')
const cheerio = require('cheerio')
const axios = require('axios')
const path = require('path')

const app = express()

const PORT = process.env.port || 4000

mongoose.connect('mongodb://localhost/NYT', {useNewUrlParser: true})

const route = require('./routes/apiRoutes')(app)

app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())


app.listen(PORT, _ => console.log('http://localhost:4000'))