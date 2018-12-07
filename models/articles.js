const mongoose = require('mongoose')

const Schema = mongoose.Schema

const ArticleSchema = new Schema ({
  headline: String,
  summary: String,
  url: String
})

const Article = mongoose.model('Article', ArticleSchema)