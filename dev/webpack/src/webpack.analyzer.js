'use strict'

const path = require('path')
const loaders = require('./loaders')
const plugins = require('./plugins')
const maxSize = 200 * 1024

module.exports = (name, pwd) => ({
  context: path.resolve(pwd, 'src'),
  entry: {
    [name]: './index.js'
  },
  mode: 'production',
  module: {
    rules: [
      loaders.tsLoader(),
      loaders.cssLoader(),
      loaders.fileLoader()
    ]
  },
  plugins: [
    plugins.copyPlugin(pwd),
    plugins.miniCssExtractPlugin(),
    plugins.preloadPlugin(),
    plugins.htmlPlugin(pwd),
    plugins.bundleAnalyzerPlugin()
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@': path.resolve(pwd, 'src')
    }
  },
  optimization: {
    minimizer: [
      plugins.terserJSPlugin()
    ],
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: 'all',
          name: 'vendor',
          test: /[\\/]node_modules[\\/]/
        },
        style: {
          chunks: 'all',
          name: 'style',
          test: /\.css$/
        }
      },
      name: 'common'
    }
  },
  output: {
    clean: true,
    chunkFilename: '[name].[contenthash].js',
    filename: '[name].[contenthash].js',
    path: path.resolve(pwd, 'public')
  },
  performance: {
    hints: 'error',
    maxAssetSize: maxSize,
    maxEntrypointSize: maxSize
  }
})
