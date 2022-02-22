import arity from './arity'
import curry from './curry'

const flatten = (array, depth = Infinity) =>
  array.flat(depth)

export default curry(arity(1, flatten))
