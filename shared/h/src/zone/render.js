import * as f from '@rex/f'
import off from './off'

export default (zone) =>
  (off(zone), zone[f.magic('zone/render')]())
