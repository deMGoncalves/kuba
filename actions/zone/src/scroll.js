import * as f from '@kuba/f'
import lazyLoad from '@kuba/lazyload'

const sroll = (zone) =>
  lazyLoad(zone[f.magic('tag')].element, () => zone.render())

export default f.idle(sroll)
