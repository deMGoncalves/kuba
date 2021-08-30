import arity from './arity'
import curry from './curry'
import reduce from './reduce'

const concat = (x, ...y) =>
  reduce(y, (a, b) => a.concat(b), x)

export default curry(arity(2, concat))
