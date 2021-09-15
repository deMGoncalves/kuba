'use strict'

const CopyWebpackPlugin = require('copy-webpack-plugin')
const dotenv = require('dotenv')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const InlineChunkHtmlPlugin = require('inline-chunk-html-plugin')
const path = require('path')
const portFinderSync = require('portfinder-sync')
const webpack = require('webpack')

dotenv.config()

module.exports = {
  context: path.resolve(__dirname, 'src'),
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, '.temp'),
    historyApiFallback: true,
    hot: false,
    index: './.temp/index.html',
    port: portFinderSync.getPort(process.env.PORT),
    proxy: {
      '/api/*': {
        changeOrigin: true,
        headers: {
          'Authorization': `Basic ${Buffer.from(process.env.PRESTASHOP_API_KEY).toString('base64')}`,
          'Output-Format': 'JSON'
        },
        pathRewrite: {
          '^/api/': '/'
        },
        target: process.env.PRESTASHOP_API_URL
      }
    }
  },
  entry: {
    app: './index.js'
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [{
          loader: 'ts-loader',
          options: {
            transpileOnly: true
          }
        }],
        exclude: '/node_modules/'
      },
      {
        test: /\.(?<ext>png|svg|jpg|jpeg|gif|woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[contenthash].[ext]'
            }
          }
        ],
        exclude: '/node_modules/'
      }
    ]
  },
  plugins: [
    new webpack.EnvironmentPlugin({
      SW_VERSION: new Date().getTime().toString(32)
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'assets'),
          noErrorOnMissing: true,
          to: '.'
        }
      ]
    }),
    new HtmlWebpackPlugin({
      inject: 'body',
      template: path.resolve(__dirname, 'src/index.html')
    }),
    new InlineChunkHtmlPlugin(HtmlWebpackPlugin, [/app/, /common/])
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  },
  output: {
    clean: true,
    chunkFilename: '[name].[contenthash].js',
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, '.temp'),
    publicPath: '/'
  }
}
