'use strict'

const shell = require('shelljs')

module.exports = function (name, option) {
  if (shell.exec(`yarn workspace @kuba/${name} test ${option.watch ? '--watchAll' : ''}`).code) {
    shell.echo('Error: yarn test failed')
    shell.exit(1)
  }
}
