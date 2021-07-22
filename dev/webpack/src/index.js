'use strict'

const analyzer = require('./webpack.analyzer')
const dev = require('./webpack.dev')
const prod = require('./webpack.prod')

module.exports = {
  analyzer,
  dev,
  prod
}
