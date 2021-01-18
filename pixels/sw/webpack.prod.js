const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const path = require('path')
const ReplaceInFileWebpackPlugin = require('replace-in-file-webpack-plugin')

module.exports = {
  mode: 'production',
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, 'template/sw.js'),
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
    ])
  ],
  output: {
    path: path.resolve(__dirname, 'public')
  }
}
