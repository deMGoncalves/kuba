const common = require('./webpack.common.js')
const { merge } = require('webpack-merge')
const path = require('path')
const ReplaceInFileWebpackPlugin = require('replace-in-file-webpack-plugin')
const TerserJSPlugin = require('terser-webpack-plugin')

module.exports = merge(common, {
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
  output: {
    path: path.resolve(__dirname, 'public')
  },
  plugins: [
    new ReplaceInFileWebpackPlugin([
      {
        dir: 'public',
        files: ['sw.js'],
        rules: [{
          search: '@cache',
          replace: () => new Date().getTime().toString(32)
        }]
      }
    ])
  ]
})
