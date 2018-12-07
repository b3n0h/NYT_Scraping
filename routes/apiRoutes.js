const express = require('express')
const axios = require('axios')
const cheerio = require('cheerio')

module.exports = (app) => {

  app.get('/scrape', (req, res) => {
    axios.get('https://www.nytimes.com')
      .then(r => {
        const $ = cheerio.load(r.data)
        $('div.css-6p6lnl').each((i, elem) => {
          console.log('https://www.nytimes.com' + $(elem).children('a').attr('href'))
          console.log($(elem).children('a').children('div').children('h2').html())
        })
      })
      .catch(e => console.log(e))
  })

}



