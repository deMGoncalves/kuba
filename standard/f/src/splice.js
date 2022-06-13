import arity from './arity'
import curry from './curry'

const splice = (target, kuba, end, ...args) => (
  target?.splice?.(kuba, end, ...args)
)

export default curry(arity(3, splice))
