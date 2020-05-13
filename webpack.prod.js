const path = require('path')
const common = require('./webpack.common.js')
const { GenerateSW } = require('workbox-webpack-plugin')
const HtmlCriticalWebpackPlugin = require("html-critical-webpack-plugin")
const merge = require('webpack-merge')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const TerserJSPlugin = require('terser-webpack-plugin')

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new GenerateSW({
      clientsClaim: true,
      skipWaiting: true
    }),
    new HtmlCriticalWebpackPlugin({
      base: path.resolve(__dirname, 'public'),
      src: 'index.html',
      dest: 'index.html',
      inline: true,
      minify: true,
      extract: true,
      width: 1300,
      height: 900,
      penthouse: {
        blockJSRequests: false,
      }
    })
  ],
  optimization: {
    moduleIds: 'hashed',
    minimizer: [
      new TerserJSPlugin({}),
      new OptimizeCSSAssetsPlugin({})
    ],
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        styles: {
          test: /\.css$/,
          name: 'styles',
          chunks: 'all',
          enforce: true,
        },
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  }
})
