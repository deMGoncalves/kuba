'use strict'

const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const InlineChunkHtmlPlugin = require('inline-chunk-html-plugin')
const path = require('path')
const TerserJSPlugin = require('terser-webpack-plugin')
const webpack = require('webpack')

module.exports = ($dirname) => ({
  context: path.resolve($dirname, 'src'),
  devServer: {
    static: {
      directory: path.join($dirname, 'public'),
      serveIndex: true
    },
    historyApiFallback: true,
    hot: true,
    port: process.env.PORT
  },
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
        test: /\.(?<ext>png|svg|jpg|jpeg|gif|mp4|ogg|webm|woff|woff2|eot|ttf|otf)$/,
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
          from: path.resolve($dirname, 'assets'),
          noErrorOnMissing: true,
          to: '.'
        }
      ]
    }),
    new HtmlWebpackPlugin({
      inject: 'body',
      template: path.resolve($dirname, 'src/index.html')
    }),
    new InlineChunkHtmlPlugin(HtmlWebpackPlugin, [/app/, /common/]),
    new BundleAnalyzerPlugin({
      analyzerMode: process.env.ANALYZER_MODE
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  },
  optimization: {
    minimizer: [
      new TerserJSPlugin({
        terserOptions: {
          keep_fnames: true,
          safari10: true
        }
      })
    ],
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: 'async',
          name: 'vendor',
          test: /[\\/]node_modules[\\/]/
        }
      },
      name: 'common'
    }
  },
  output: {
    clean: true,
    chunkFilename: '[name].[contenthash].js',
    filename: '[name].[contenthash].js',
    path: path.resolve($dirname, 'public'),
    publicPath: '/'
  },
  performance: {
    hints: process.env.HINTS,
    maxAssetSize: Number(process.env.MAX_ASSET_SIZE),
    maxEntrypointSize: Number(process.env.MAX_ENTRYPOINT_SIZE)
  }
})
