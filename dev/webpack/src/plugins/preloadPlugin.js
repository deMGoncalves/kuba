'use strict'

const PreloadWebpackPlugin = require('preload-webpack-plugin')

module.exports = () =>
  new PreloadWebpackPlugin({
    as (file) {
      if (/\.css$/.test(file)) return 'style';
      if (/\.(woff|woff2|eot|ttf|otf)$/.test(file)) return 'font';
      if (/\.(png|svg|jpg|jpeg|gif)$/.test(file)) return 'image';
      return 'script'
    },
    rel: 'preload'
  })
