'use strict'

const { StatsWriterPlugin } = require('webpack-stats-plugin')

module.exports = () =>
  new StatsWriterPlugin({
    filename: 'stats.json'
  })
