import * as f from '@kuba/f'
import accordion from './accordion'
import link from './link'

export default f.cond(
  [accordion.is, accordion],
  [link.is, link]
)
