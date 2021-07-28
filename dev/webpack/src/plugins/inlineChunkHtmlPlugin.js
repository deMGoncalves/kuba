const HtmlWebpackPlugin = require('html-webpack-plugin')
const InlineChunkHtmlPlugin = require('inline-chunk-html-plugin')

module.exports = () =>
  new InlineChunkHtmlPlugin(HtmlWebpackPlugin, [/app/, /common/])
