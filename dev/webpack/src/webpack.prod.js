'use strict'

const common = require('./webpack.common.js')
const maxSize = 204800
const { merge } = require('webpack-merge')
const path = require('path')
const TerserJSPlugin = require('terser-webpack-plugin')
const WorkboxPlugin = require('workbox-webpack-plugin')


module.exports = (dirname) =>
  merge(common(dirname), {
    mode: 'production',
    optimization: {
      minimizer: [
        new TerserJSPlugin({
          terserOptions: {
            keep_fnames: true,
            safari10: true
          }
        })
      ],
      splitChunks: {
        cacheGroups: {
          vendor: {
            chunks: 'all',
            name: 'vendor',
            test: /[\\/]node_modules[\\/]/
          }
        },
        name: 'common'
      }
    },
    output: {
      path: path.resolve(dirname, 'public')
    },
    performance: {
      hints: 'error',
      maxAssetSize: maxSize,
      maxEntrypointSize: maxSize
    },
    plugins: [
      new WorkboxPlugin.GenerateSW({
        clientsClaim: true,
        skipWaiting: true
      }) 
    ]
  })
