import * as f from '@kuba/f'
import marca from './marca'
import search from './search'
import shape from './shape'
import sitemap from './sitemap.xml'

f.assign(shape, {
  marca,
  search,
  sitemap
})

export default shape
