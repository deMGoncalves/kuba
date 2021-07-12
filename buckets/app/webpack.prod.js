'use strict'

const common = require('./webpack.common.js')
const { merge } = require('webpack-merge')
const path = require('path')
const ReplaceInFileWebpackPlugin = require('replace-in-file-webpack-plugin')
const TerserJSPlugin = require('terser-webpack-plugin')
const radix = 32

module.exports = merge(common, {
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
    path: path.resolve(__dirname, 'public')
  },
  performance: {
    hints: 'error',
    maxAssetSize: 200 * 1024,
    maxEntrypointSize: 200 * 1024
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
