const common = require('./webpack.common.js')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const merge = require('webpack-merge')
const path = require('path')
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin')
const { StatsWriterPlugin } = require('webpack-stats-plugin')
const TerserJSPlugin = require('terser-webpack-plugin')

module.exports = merge.smart(common, {
  mode: 'production',
  optimization: {
    minimizer: [
      new CssMinimizerPlugin(),
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
    filename: 'header.[hash].js',
    globalObject: 'self',
    library: 'header',
    libraryTarget: 'umd',
    path: path.resolve(__dirname, 'public'),
    publicPath: 'https://header-kuba-engineer.web.app/',
    umdNamedDefine: true
  },
  plugins: [
    new ScriptExtHtmlWebpackPlugin({
      defaultAttribute: 'async'
    }),
    new StatsWriterPlugin()
  ]
})
