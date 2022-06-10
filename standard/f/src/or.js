import arity from './arity'
import curry from './curry'

const or = (x, ...target) => (
  target?.reduce((a, b) => a || b, x)
)

export default curry(arity(2, or))
