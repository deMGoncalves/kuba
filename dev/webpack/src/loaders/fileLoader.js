'use strict'

module.exports = () => ({
  test: /\.(png|svg|jpg|jpeg|gif|woff|woff2|eot|ttf|otf)$/,
  use: [
    {
      loader: 'file-loader',
      options: {
        name: '[name].[contenthash].[ext]'
      }
    }
  ],
  exclude: '/node_modules/'
})
