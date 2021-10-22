'use strict'

const { resolve } = require('path')
const shell = require('shelljs')

module.exports = function (name, path, option) {
  shell.cd(
    resolve(__dirname, '..', '..', '..')
  )

  shell.cp(
    '-r',
    resolve('development', 'boilerplate', 'src'),
    resolve(path, 'src', option.folder, name)
  )

  shell
    .ls(resolve(path, 'src', option.folder, name, '*.js*'))
    .forEach(file => {
      shell.sed('-i', /boilerplate/g, name, file)
      shell.sed('-i', /Boilerplate/g, name.charAt(0).toUpperCase() + name.slice(1), file)
    })

  shell.mv(
    resolve(path, 'src', option.folder, name, 'boilerplate.js'),
    resolve(path, 'src', option.folder, name, `${name}.js`)
  )
}
