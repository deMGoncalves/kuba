import arity from './arity'
import curry from './curry'
import dunder from './dunder'
import _push from './internal/push'

const evaluate = dunder('push')

const push = (target, ...args) =>
  _push(evaluate(target), ...args)

export default curry(arity(2, push))
