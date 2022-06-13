import arity from './arity'
import curry from './curry'
import dunder from './dunder'

const toString = (target, radix) =>
  (dunder('toString', target))?.toString?.(radix)

export default curry(arity(1, toString))
