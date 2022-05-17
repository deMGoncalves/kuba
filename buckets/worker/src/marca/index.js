import * as f from '@kuba/f'
import marca from './marca'
import shelf from './shelf'
import sitemap from './sitemap.xml'
import view from './view'

f.assign(marca, {
  shelf,
  sitemap,
  view
})

export default marca
