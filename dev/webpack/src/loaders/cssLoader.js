'use strict'

const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = () => ({
  test: /\.css$/,
  use: [
    MiniCssExtractPlugin.loader,
    {
      loader: 'css-loader',
      options: {
        modules: true
      }
    },
    'postcss-loader'
  ],
  exclude: '/node_modules/'
})
