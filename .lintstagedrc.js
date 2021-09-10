'use strict'

const fs = require('fs')
const root = require('./package.json')

const workspaces = root 
  .workspaces
  .packages
  .map(w => w.slice(0, -2))

const packages = workspaces
  .map(w =>
    fs.readdirSync(w, { withFileTypes: true })
      .filter(d => d.isDirectory())
      .map(d => d.name)
  )

const listener = (workspace, package) =>
  `${workspace}/${package}/**/*`

const command = (package) =>
  `yarn workspace @${root.name}/${package} lint-staged --allow-empty`

const mapper = workspaces
  .reduce((object, workspace, index) =>
    (packages[index].forEach(package => object[listener(workspace, package)] = command(package)), object), {})

module.exports = mapper
