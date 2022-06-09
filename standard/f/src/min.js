import arity from './arity'
import curry from './curry'

const max = (...args) => (
  Math.min(...args)
)

export default curry(arity(2, max))
