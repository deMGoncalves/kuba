'use strict'

const CopyWebpackPlugin = require('copy-webpack-plugin')
const path = require('path')

module.exports = (pwd) =>
  new CopyWebpackPlugin({
    patterns: [
      {
        from: path.resolve(pwd, 'assets'),
        noErrorOnMissing: true,
        to: '.'
      }
    ]
  })
