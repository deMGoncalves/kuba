const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const SocialTags = require('social-tags-webpack-plugin')

module.exports = {
  entry: {
    app: './src/index.js'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      meta: {
        description: 'Simples, pequeno e imperfeito. Uma visão além da programação'
      },
      template: './src/index.html',
      title: 'Rex.JS · O bom e velho amigo do programador'
    }),
    new FaviconsWebpackPlugin({
      logo: './src/favicon.png',
      prefix: 'icons-[hash]/',
      emitStats: true,
      statsFilename: 'iconstats-[hash].json',
      persistentCache: true,
      inject: true,
      background: '#0A0A0A',
      title: 'Rex.JS',
      icons: {
        android: true,
        appleIcon: true,
        appleStartup: true,
        coast: true,
        favicons: true,
        firefox: true,
        opengraph: true,
        twitter: true,
        yandex: true,
        windows: true
      }
    }),
    new SocialTags({
      appUrl: 'https://rex-js.web.app',
      facebook: {
        'fb:app_id': '',
        'og:url': 'https://rex-js.web.app',
        'og:type': 'website',
        'og:title': 'Rex · O bom e velhor amigo do programador',
        'og:image': 'src/favicon.png',
        'og:description': 'Simples pequeno e imperfeito. Uma visão além da programação',
        'og:site_name': 'Rex.JS',
        'og:locale': 'pt_BR',
        'og:article:author': 'Cleber de Moraes Gonçalves'
      },
      twitter: {
        'twitter:card': 'summary',
        'twitter:site': '@rexjs',
        'twitter:creator': '@rexjs',
        'twitter:url': 'https://rex-js.web.app',
        'twitter:title': 'Rex.JS · O bom e velho amigo do programador',
        'twitter:description': 'Simples, pequeno e imperfeito. Uma visão além da programação',
        'twitter:image': './src/favicon.png'
      }
    }),
    new CopyPlugin([
      './src/favicon.png',
      './src/manifest.json'
    ])
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
              importLoaders: 1
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
