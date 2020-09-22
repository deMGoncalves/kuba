const path = require('path')
const common = require('./webpack.common.js')
const merge = require('webpack-merge')

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
