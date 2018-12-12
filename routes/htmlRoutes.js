const path = require('path')
const db = require('../models')

module.exports = app => {

  app.get('/saved', (req, res) = {
    db.Article.find({})
  })

}