import zeroParameter from './zeroParameter'
import oneParameter from './oneParameter'
import twoParameters from './twoParameters'
import threeParameters from './threeParameters'
import throwParameters from './throwParameters'

export default (target) =>
  ([zeroParameter, oneParameter, twoParameters, threeParameters][target.length] || throwParameters)(target)
