'use strict'

const path = require('path')
const portFinderSync = require('portfinder-sync')
const loaders = require('./loaders')
const plugins = require('./plugins')
const port = 9000

module.exports = (name, pwd) => ({
  context: path.resolve(pwd, 'src'),
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(pwd, '.temp'),
    historyApiFallback: true,
    hot: true,
    index: './.temp/index.html',
    port: portFinderSync.getPort(port),
    proxy: {
      '/api/*': {
        changeOrigin: true,
        pathRewrite: {
          '^/api/': '/'
        },
        target: `http://localhost:${port + 1}/api`
      }
    }
  },
  entry: {
    [name]: './index.js'
  },
  mode: 'development',
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
    plugins.htmlPlugin(pwd)
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@': path.resolve(pwd, 'src')
    }
  },
  output: {
    clean: true,
    chunkFilename: '[name].[contenthash].js',
    filename: '[name].[contenthash].js',
    path: path.resolve(pwd, '.temp')
  }
})
