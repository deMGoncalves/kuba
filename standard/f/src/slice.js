import arity from './arity'
import curry from './curry'

const slice = (target, start, end) => (
  target?.slice?.(start, end)
)

export default curry(arity(2, slice))
