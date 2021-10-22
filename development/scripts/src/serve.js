'use strict'

const shell = require('shelljs')

module.exports = function (name) {
  if (shell.exec(`yarn workspace @kuba/${name} start`).code) {
    shell.echo('Error: yarn serve failed')
    shell.exit(1)
  }
}
