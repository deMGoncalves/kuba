import arity from './arity'
import curry from './curry'
import reduce from './reduce'

const concat = (x, ...args) => (
  reduce(args, (a, b) => a?.concat?.(b), x)
)

export default curry(arity(2, concat))
