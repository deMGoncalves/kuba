'use strict'

const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    app: './index.js'
  },
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
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          },
          'postcss-loader'
        ],
        exclude: '/node_modules/'
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[hash].[ext]'
            }
          }
        ],
        exclude: '/node_modules/'
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      chunkFilename: "[id].[contenthash].css",
      filename: "[name].[contenthash].css",
      ignoreOrder: true
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: path.resolve(__dirname, 'assets'), to: '.' }
      ]
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'assets/template.html')
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  output: {
    chunkFilename: '[name].[contenthash].js',
    filename: '[name].[contenthash].js',
    publicPath: '/'
  }
}
