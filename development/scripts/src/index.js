#!/usr/bin/env node
'use strict'

const program = require('commander')

program
  .command('package [name] [workspace]')
  .description('Cria um pacote')
  .action(require('./package'))

program
  .command('class [name] [path]')
  .description('Cria uma class')
  .option('-f, --folder [folder]', 'Caminho dentro do package em que a class sera criada', '')
  .action(require('./class'))

program
  .command('component [name] [path]')
  .description('Cria uma component')
  .option('-f, --folder [folder]', 'Caminho dentro do package em que o component sera criado', '')
  .action(require('./component'))

program.parse(process.argv)
