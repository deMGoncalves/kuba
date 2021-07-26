'use strict'

const TerserJSPlugin = require('terser-webpack-plugin')

module.exports = () =>
  new TerserJSPlugin({
    terserOptions: {
      keep_fnames: true,
      safari10: true
    }
  })
