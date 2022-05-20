import * as f from '@kuba/f'
import marca from './marca'
import search from './search'
import shape from './shape'
import sitemap from './sitemap.xml'
import view from './view'

f.assign(shape, {
  marca,
  search,
  sitemap,
  view
})

export default shape
