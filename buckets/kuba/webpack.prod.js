const common = require('./webpack.common.js')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const merge = require('webpack-merge')
const path = require('path')
const ReplaceInFileWebpackPlugin = require('replace-in-file-webpack-plugin')
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin')
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
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../../pixels/sw/template/sw.js'),
        to: '.'
      }
    ]),
    new ReplaceInFileWebpackPlugin([
      {
        dir: 'public',
        files: ['sw.js'],
        rules: [{
          search: '@cache',
          replace: () => new Date().getTime().toString(32)
        }]
      }
    ]),
    new ScriptExtHtmlWebpackPlugin({
      defaultAttribute: 'async'
    })
  ],
  output: {
    path: path.resolve(__dirname, 'public')
  }
})
