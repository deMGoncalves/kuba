import arity from './arity'
import curry from './curry'

const flatten = (target, depth = Infinity) => (
  target?.flat?.(depth)
)

export default curry(arity(1, flatten))
