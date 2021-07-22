'use strict'

const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const PreloadWebpackPlugin = require('preload-webpack-plugin')
const path = require('path')

module.exports = (dirname) => ({
  context: path.resolve(dirname, 'src'),
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
              name: '[name].[contenthash].[ext]'
            }
          }
        ],
        exclude: '/node_modules/'
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(dirname, 'assets'),
          to: '.'
        }
      ]
    }),
    new MiniCssExtractPlugin({
      chunkFilename: '[name].[contenthash].css',
      filename: '[name].[contenthash].css'
    }), 
    new PreloadWebpackPlugin({
      rel: 'prefetch'
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(dirname, 'src/index.html')
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@': path.resolve(dirname, 'src')
    }
  },
  output: {
    clean: true,
    chunkFilename: '[name].[contenthash].js',
    filename: '[name].[contenthash].js',
    publicPath: '/'
  }
})
