#!/usr/bin/env node

const program = require('commander')
const shell = require('shelljs')

program
  .command('serve <bucket>')
  .alias('s')
  .description('Inicia um server de desenvolvimento')
  .action(function (bucket) {
    shell.exec(`yarn workspace @kuba/${bucket} start`)
  })

program
  .command('lift <bucket>')
  .alias('l')
  .description('Executar a rotina de deploy')
  .action(function (bucket) {
    shell.exec(`yarn workspace @kuba/${bucket} build`)
    shell.exec(`yarn workspace @kuba/${bucket} deploy`)
  })

program.parse(process.argv)
