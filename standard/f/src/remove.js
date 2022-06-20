import curry from './curry'
import dunder from './dunder'
import _remove from './internal/remove'

const evaluate = dunder('remove')

const remove = (target, x) =>
  _remove(evaluate(target), x)

export default curry(remove)
