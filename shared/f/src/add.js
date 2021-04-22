import arity from './arity'
import curry from './curry'
import reduce from './reduce'

const add = (x, ...y) =>
  reduce(y, (a, b) => a + b, x)

export default curry(arity(2, add))
