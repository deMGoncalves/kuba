import curry from './curry'
import or from './or'

const map = (target, callback) =>
  or(target['f/map'], target).map(callback)

export default curry(map)
