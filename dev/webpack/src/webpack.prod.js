'use strict'

const common = require('./webpack.common.js')
const { merge } = require('webpack-merge')
const path = require('path')
const ReplaceInFileWebpackPlugin = require('replace-in-file-webpack-plugin')
const TerserJSPlugin = require('terser-webpack-plugin')

const radix = 32
const maxSize = 204800

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
      new ReplaceInFileWebpackPlugin([
        {
          dir: 'public',
          files: ['sw.js'],
          rules: [{
            search: '@cache',
            replace: () => new Date().getTime().toString(radix)
          }]
        }
      ])
    ]
  })
