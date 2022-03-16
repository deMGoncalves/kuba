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
    .ls(resolve(path, 'src', option.folder, name, 'index.js'))
    .forEach(file => {
      shell.sed('-i', /boilerplate/g, 'component', file)
    })

  shell
    .ls(resolve(path, 'src', option.folder, name, 'component.jsx'))
    .forEach(file => {
      shell.sed('-i', /\.(?<name>boilerplate)/g, `.${name}`, file)
      shell.sed('-i', /boilerplate/g, 'props', file)
    })

  shell.rm(
    resolve(path, 'src', option.folder, name, 'boilerplate.js')
  )
}
