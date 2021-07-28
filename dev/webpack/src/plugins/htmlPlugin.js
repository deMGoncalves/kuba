'use strict'

const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = (pwd) =>
  new HtmlWebpackPlugin({
    inject: 'body',
    template: path.resolve(pwd, 'src/index.html')
  })
