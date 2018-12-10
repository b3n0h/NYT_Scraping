const express = require('express')
const axios = require('axios')
const cheerio = require('cheerio')

module.exports = (app) => {

  app.get('/scrape', (req, res) => {
    axios.get('https://www.nytimes.com/section/world/')
      .then(r => {
        const $ = cheerio.load(r.data)
        $('div.story-body').each((i, elem) => {
          if (i <= 10) {
            const title = $(elem).children('h2.headline').text()
            const link = $(elem).children('h2.headline').children('a').attr('href')
            const summary = $(elem).children('p.summary').text()
          }
        })
      })
      .catch(e => console.log(e))
  })

}



