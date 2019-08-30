const { BundleStatsWebpackPlugin } = require('bundle-stats')
const { BaseHrefWebpackPlugin } = require('base-href-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackPreconnectPlugin = require('html-webpack-preconnect-plugin')
const ManifestPlugin = require('webpack-manifest-plugin')
const path = require('path')

module.exports = {
  entry: {
    app: './src/index.jsx'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      favicon: './src/favicon.png',
      meta: {
        'Content-Security-Policy': {
          'http-equiv': 'Content-Security-Policy',
          content: 'block-all-mixed-content'
        },
        description: 'Simples, pequeno e imperfeito. Uma visão além da programação',
        'google-site-verification': 'O2NHRDzHBdUXxeKwEduXEmAU8Gqe79BE4ajkw9IFu5Y'
      },
      preconnect: [
        'https://fonts.googleapis.com'
      ],
      template: './src/index.html',
      title: 'Rex.JS · O bom e velho amigo do programador'
    }),
    new HtmlWebpackPreconnectPlugin(),
    new ScriptExtHtmlWebpackPlugin({
      prefetch: /\.js$/
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
    }),
    new BundleStatsWebpackPlugin()
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
      '@router': path.resolve(__dirname, 'src/router')
    }
  },
  output: {
    filename: '[name].[hash].js',
    chunkFilename: '[name].[hash].js',
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
