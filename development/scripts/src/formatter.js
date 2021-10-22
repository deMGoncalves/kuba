'use strict'

const shell = require('shelljs')

module.exports = function (name, option) {
  if (shell.exec(`yarn workspace @kuba/${name} run eslint src/**/*.{js,jsx} --fix`).code) {
    shell.echo('Error: yarn eslint failed')
    shell.exit(1)
  }

  if (option.stylelint) {
    if (shell.exec(`yarn workspace @kuba/${name} run stylelint src/**/*.{js,jsx} --fix`).code) {
      shell.echo('Error: yarn stylelint failed')
      shell.exit(1)
    }
  }
}
