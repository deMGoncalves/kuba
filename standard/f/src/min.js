import arity from './arity'
import curry from './curry'

const min = (...args) => (
  Math.min(...args)
)

export default curry(arity(2, min))
