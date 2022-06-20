import arity from './internal/arity'
import curry from './curry'
import dunder from './dunder'
import _toString from './internal/toString'

const evaluate = dunder('toString')

const toString = (target, radix) =>
  _toString(evaluate(target), radix)

export default curry(arity(1, toString))
