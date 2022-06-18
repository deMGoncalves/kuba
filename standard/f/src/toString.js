import arity from './arity'
import curry from './curry'
import dunder from './dunder'

const evaluate = dunder('toString')

const toString = (target, radix) =>
  evaluate(target)?.toString?.(radix)

export default curry(arity(1, toString))
