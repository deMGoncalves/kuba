import * as f from '@rex/f'
import hasTarget from './hasTarget'

export default (element, vElement) =>
  f.and(f.and(hasTarget(element), hasTarget(vElement)), f.different(element.__target__, vElement.__target__))
