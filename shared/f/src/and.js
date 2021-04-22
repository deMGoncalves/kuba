import arity from './arity'
import curry from './curry'
import reduce from './reduce'

const and = (x, ...y) =>
  reduce(y, (a, b) => a && b, x)

export default curry(arity(2, and))
