const express = require('express')
const mongoose = require('mongoose')
const bodyparser = require('body-parser')
const cheerio = require('cheerio')
const axios = require('axios')
const path = require('path')

const app = express()

mongoose.connect('mongodb://localhost/NYT', {useNewUrlParser: true})

app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())


app.listen(4000, _ => console.log('http://localhost:4000'))