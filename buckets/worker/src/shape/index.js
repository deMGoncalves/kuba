import * as f from '@kuba/f'
import search from './search'
import shape from './shape'
import sitemap from './sitemap.xml'

f.assign(shape, {
  search,
  sitemap
})

export default shape
