'use strict'

const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

module.exports = () =>
  new BundleAnalyzerPlugin()
