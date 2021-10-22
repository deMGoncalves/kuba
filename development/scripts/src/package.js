'use strict'

const { resolve } = require('path')
const shell = require('shelljs')

module.exports = function (name, workspace) {
  shell.cd(
    resolve(__dirname, '..', '..', '..')
  )

  shell.cp(
    '-r',
    resolve('development', 'boilerplate'),
    resolve(workspace, name)
  )

  shell
    .ls(resolve(workspace, name, '**', '*.js*'))
    .forEach(file => {
      shell.sed('-i', /boilerplate/g, name, file)
      shell.sed('-i', /Boilerplate/g, name.charAt(0).toUpperCase() + name.slice(1), file)
    })

  shell.mv(
    resolve(workspace, name, 'src', 'boilerplate.js'),
    resolve(workspace, name, 'src', `${name}.js`)
  )

  if (shell.exec('yarn install').code) {
    shell.echo('Error: yarn install failed')
    shell.exit(1)
  }
}
