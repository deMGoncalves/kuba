import curry from './curry'
import or from './or'

const repeat = (value, n) =>
  Array(or(n, 0)).fill(value)

export default curry(repeat)
