const common = require('./webpack.common.js')
const merge = require('webpack-merge')
const path = require('path')
const TerserJSPlugin = require('terser-webpack-plugin')

module.exports = merge.smart(common, {
  mode: 'production',
  optimization: {
    minimizer: [
      new TerserJSPlugin({
        terserOptions: {
          safari10: true
        }
      })
    ]
  },
  output: {
    path: path.resolve(__dirname, 'public')
  }
})
