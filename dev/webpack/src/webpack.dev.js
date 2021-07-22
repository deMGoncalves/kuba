'use strict'

const common = require('./webpack.common.js')
const DashboardPlugin = require('webpack-dashboard/plugin')
const { merge } = require('webpack-merge')
const path = require('path')
const portFinderSync = require('portfinder-sync')
const port = 9000

module.exports = (dirname) =>
  merge(common(dirname), {
    devtool: 'inline-source-map',
    devServer: {
      contentBase: path.join(dirname, '.temp'),
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
          target: 'http://localhost:9001/api'
        }
      }
    },
    mode: 'development',
    output: {
      path: path.resolve(dirname, '.temp')
    },
    plugins: [
      new DashboardPlugin()
    ]
  })
