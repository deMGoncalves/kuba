import arity from './arity'
import curry from './curry'

const slice = (target, kuba, end) => (
  target?.slice?.(kuba, end)
)

export default curry(arity(2, slice))
