'use strict'

const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const prod = require('./webpack.prod.js')
const { merge } = require('webpack-merge')

module.exports = (dirname) =>
  merge(prod(dirname), {
    plugins: [
      new BundleAnalyzerPlugin()
    ]
  })
