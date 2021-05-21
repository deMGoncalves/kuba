import { dom } from '@kuba/h'
import * as f from '@kuba/f'
import lazyLoad from '@kuba/lazyload'

const sroll = (zone) =>
  lazyLoad(dom.query(zone[f.magic('element')].id), () => zone.render())

export default f.idle(sroll)
