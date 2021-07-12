'use strict'

const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const prod = require('./webpack.prod.js')
const { merge } = require('webpack-merge')

module.exports = merge(prod, {
  plugins: [
    new BundleAnalyzerPlugin()
  ]
})
