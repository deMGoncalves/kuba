'use strict'

module.exports = () => ({
  test: /\.jsx?$/,
  use: [{
    loader: 'ts-loader',
    options: {
      transpileOnly: true
    }
  }],
  exclude: '/node_modules/'
})
