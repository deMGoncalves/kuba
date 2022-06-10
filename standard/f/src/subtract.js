import arity from './arity'
import curry from './curry'
import reduce from './reduce'

const subtract = (x, ...args) => (
  reduce(args, (a, b) => a - b, x)
)

export default curry(arity(2, subtract))
