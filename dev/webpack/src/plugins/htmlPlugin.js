'use strict'

const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = (pwd) =>
  new HtmlWebpackPlugin({
    template: path.resolve(pwd, 'src/index.html')
  })
