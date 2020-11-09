import * as f from '@rex/f'
import hasTarget from './hasTarget'

const target = f.magic('h/target')

export default (element, vElement) =>
  f.and(f.and(hasTarget(element), hasTarget(vElement)), f.equal(element[target], vElement[target]))
