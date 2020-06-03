const path = require('path')

const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    app: './src/index.js'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, 'template'),
        to: '.'
      }
    ]),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'template/index.html')
    })
  ],
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
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[hash].[ext]'
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[hash].[ext]'
            }
          }
        ]
      },
      {
        test: /\.(wav)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[hash].[ext]'
            }
          }
        ]
      },
      {
        test: /\.(csv|tsv)$/,
        use: [
          {
            loader: 'csv-loader',
            options: {
              name: '[name].[hash].[ext]'
            }
          }
        ]
      },
      {
        test: /\.xml$/,
        use: [
          {
            loader: 'xml-loader',
            options: {
              name: '[name].[hash].[ext]'
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@f': path.resolve(__dirname, 'src/f'),
      '@h': path.resolve(__dirname, 'src/h'),
      '@hook': path.resolve(__dirname, 'src/hook'),
      '@metadata': path.resolve(__dirname, 'src/metadata'),
      '@opengraph': path.resolve(__dirname, 'src/opengraph'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@radio': path.resolve(__dirname, 'src/radio'),
      '@router': path.resolve(__dirname, 'src/router'),
      '@share': path.resolve(__dirname, 'src/share'),
      '@structureddata': path.resolve(__dirname, 'src/structureddata'),
      '@twittercard': path.resolve(__dirname, 'src/twittercard'),
      '@sw': path.resolve(__dirname, 'src/sw')
    }
  },
  output: {
    filename: '[name].[hash].js',
    chunkFilename: '[name].[hash].js',
    path: path.resolve(__dirname, 'public'),
    publicPath: '/'
  }
}
