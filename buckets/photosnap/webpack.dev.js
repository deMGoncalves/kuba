const common = require('./webpack.common.js')
const merge = require('webpack-merge')
const path = require('path')

module.exports = merge(common, {
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, '.temp'),
    historyApiFallback: true,
    hot: true,
    index: './.temp/index.html',
    port: 5001
  },
  output: {
    path: path.resolve(__dirname, '.temp')
  }
})
