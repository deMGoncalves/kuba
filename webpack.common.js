const { BaseHrefWebpackPlugin } = require('base-href-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ManifestPlugin = require('webpack-manifest-plugin')
const path = require('path')

module.exports = {
  entry: {
    app: './src/index.js'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      cache: true,
      favicon: './src/favicon.png',
      meta: {
        'Content-Security-Policy': {
          'http-equiv': 'Content-Security-Policy',
          content: 'block-all-mixed-content'
        },
        description: 'Simples, pequeno e imperfeito. Uma visão além da programação'
      },
      template: './src/index.html',
      title: 'Rex.JS · O bom e velho amigo do programador'
    }),
    new BaseHrefWebpackPlugin({
      baseHref: '/'
    }),
    new ManifestPlugin({
      seed: {
        background_color: '#0a0a0a',
        description: 'Simples, pequeno e imperfeiro. Uma visão além da programação',
        display: 'standalone',
        icons: [
          {
            src: '/favicon.png',
            type: 'image/png',
            size: '512x512'
          }
        ],
        lang: 'Portuguese',
        name: 'Rex.JS',
        orientation: 'portrait',
        scope: '/',
        short_name: 'Rex',
        start_url: 'https://rex-js.web.app',
        theme_color: '#0a0a0a'
      }
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: ['ts-loader'],
        exclude: '/node_modules/'
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          },
          'postcss-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-upload']
      },
      {
        test: /\.(csv|tsv)$/,
        use: ['csv-loader']
      },
      {
        test: /\.xml$/,
        use: ['xml-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@h': path.resolve(__dirname, 'src/h'),
      '@gps': path.resolve(__dirname, 'src/gps')
    }
  },
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, 'public'),
    publicPath: '/'
  },
  optimization: {
    moduleIds: 'hashed',
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  }
}
