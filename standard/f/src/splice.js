import arity from './arity'
import curry from './curry'

const splice = (target, start, end, ...args) => (
  target?.splice?.(start, end, ...args)
)

export default curry(arity(3, splice))
