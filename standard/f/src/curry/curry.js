import oneParameter from './oneParameter'
import threeParameters from './threeParameters'
import throwParameters from './throwParameters'
import twoParameters from './twoParameters'
import zeroParameter from './zeroParameter'

export default (target) =>
  ([zeroParameter, oneParameter, twoParameters, threeParameters][target.length] || throwParameters)(target)
