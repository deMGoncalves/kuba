const common = require('./webpack.common.js')
const merge = require('webpack-merge')
const path = require('path')
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin')
const TerserJSPlugin = require('terser-webpack-plugin')

module.exports = merge.smart(common, {
  mode: 'production',
  optimization: {
    minimizer: [
      new TerserJSPlugin({
        terserOptions: {
          keep_fnames: true,
          safari10: true
        }
      })
    ]
  },
  plugins: [
    new ScriptExtHtmlWebpackPlugin({
      defaultAttribute: 'async'
    })
  ],
  output: {
    path: path.resolve(__dirname, 'public')
  }
})
