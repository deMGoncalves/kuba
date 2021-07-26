'use strict'

const MiniCssExtractWebpackPlugin = require('mini-css-extract-plugin')

module.exports = () =>
  new MiniCssExtractWebpackPlugin({
    chunkFilename: '[name].[contenthash].css',
    filename: '[name].[contenthash].css',
    ignoreOrder: true
  })
