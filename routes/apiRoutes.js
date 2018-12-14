const path = require('path')
const axios = require('axios')
const cheerio = require('cheerio')
const db = require('../models')

module.exports = (app) => {

  
  app.get('/scrape', (req, res) => {
    db.Article.remove({}, (e, d) => {
      axios.get('https://www.nytimes.com/section/world/')
      .then(r => {
        const $ = cheerio.load(r.data)
        let articlesArr = []
        $('div.story-body').each((i, elem) => {
          if (i <= 9) {
            articlesArr.push({
              headline: $(elem).children('h2.headline').text().trim(),
                summary: $(elem).children('p.summary').text(),
                url: $(elem).children('h2.headline').children('a').attr('href'),
                saved: false
              })
            }
          })
          db.Article.create(articlesArr, (e, d) => {
            if (e) console.log(e)
            res.send(d)
          })
        })
        .catch(e => console.log(e))
      })
      .catch(e => console.log(e))
    })
    
    app.get('/articles', (req, res) => {
      db.Article.find({})
      .then(function (dbArticle) {
        res.json(dbArticle)
      })
    })

    app.put('/article', function (req, res) {
      console.log(req.body)
      db.Article.findOneAndUpdate({ _id: req.body.id }, { saved: true }, function (err, doc) {
        if (err) throw err
        res.sendStatus(200)
    })
  })
    
    app.get('/saved', (req, res) => {
      db.Article.find({saved: true})
      .then(function (savedArticles) {
        res.json(savedArticles)
    })
  })

}


