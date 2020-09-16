const path = require('path')
const common = require('./webpack.common.js')
const merge = require('webpack-merge')
const { StatsWriterPlugin } = require('webpack-stats-plugin')
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
    filename: 'GTM.[hash].js',
    globalObject: 'this',
    library: 'GTM',
    libraryTarget: 'umd',
    path: path.resolve(__dirname, 'public'),
    publicPath: '/',
    umdNamedDefine: true
  },
  plugins: [
    new StatsWriterPlugin()
  ]
})
