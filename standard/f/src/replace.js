import curry from './curry'
import dunder from './dunder'
import _replace from './internal/replace'

const evaluate = dunder('replace')

const replace = (target, x, y) =>
  _replace(evaluate(target), x, y)

export default curry(replace)
