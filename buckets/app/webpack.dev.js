'use strict'

const common = require('./webpack.common.js')
const { merge } = require('webpack-merge')
const path = require('path')
const portFinderSync = require('portfinder-sync')
const port = 3000

module.exports = merge(common, {
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, '.temp'),
    historyApiFallback: true,
    hot: true,
    index: './.temp/index.html',
    port: portFinderSync.getPort(port),
    proxy: {
      '/api/*': {
        changeOrigin: true,
        pathRewrite: { '^/api/': '/' },
        target: 'http://localhost:9001/api'
      }
    }
  },
  mode: 'development',
  output: {
    path: path.resolve(__dirname, '.temp')
  }
})
