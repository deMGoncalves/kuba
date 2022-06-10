import arity from './arity'
import curry from './curry'

const toString = (target, radix) => (
  target.toString(radix)
)

export default curry(arity(1, toString))
