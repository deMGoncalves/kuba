import arity from './arity'
import curry from './curry'
import reduce from './reduce'

const and = (x, ...args) =>
  reduce(args, (a, b) => a && b, x)

export default curry(arity(2, and))
