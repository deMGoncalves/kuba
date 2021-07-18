import * as f from '@kuba/f'
import onScreen from '@kuba/onscreen'

const scroll = (zone) =>
  onScreen(zone[f.magic('tag')].element, () => zone.render())

export default f.idle(scroll)
