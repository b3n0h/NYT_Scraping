const path = require('path')
const axios = require('axios')
const cheerio = require('cheerio')
const db = require('../models')

module.exports = (app) => {

  app.get('/scrape', (req, res) => {
    axios.get('https://www.nytimes.com/section/world/')
      .then(r => {
        const $ = cheerio.load(r.data)
        let articlesArr = []
        $('div.story-body').each((i, elem) => {
          if (i <= 9) {
          articlesArr.push({
               headline: $(elem).children('h2.headline').text().trim(),
               summary: $(elem).children('p.summary').text(),
               url: $(elem).children('h2.headline').children('a').attr('href')
              })
            }
        })
        db.Article.create(articlesArr, (e, d) => {
          if (e) console.log(e)
        })
        res.send(articlesArr)
      })
      .catch(e => console.log(e))
  })
  
  app.get('/articles', (req, res) => {
    db.Article.find({})
    .then(function (dbArticle) {
      res.json(dbArticle)
    })
  })

}


