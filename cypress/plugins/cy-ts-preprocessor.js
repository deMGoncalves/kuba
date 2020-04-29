const wp = require('@cypress/webpack-preprocessor')
const common = require('../../webpack.common')

const options = {
  webpackOptions: {
    resolve: common.resolve,
    module: common.module
  }
}

module.exports = wp(options)