import oneParameter from './oneParameter'
import twoParameters from './twoParameters'
import threeParameters from './threeParameters'

export default (target) =>
  [null, oneParameter, twoParameters, threeParameters][target.length](target)
