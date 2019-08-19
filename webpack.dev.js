const common = require('./webpack.common.js')
const merge = require('webpack-merge')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './public',
    historyApiFallback: true,
    hot: true,
    port: 9000
  }
})
