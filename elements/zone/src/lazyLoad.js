import { dom } from '@kuba/h'
import * as f from '@kuba/f'
import lazyLoad from '@kuba/lazyload'

export default (zone) =>
  setTimeout(
    () => lazyLoad(dom.query(zone[f.magic('element')].id), () => zone.render()),
    0
  )
