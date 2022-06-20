import curry from './curry'
import dunder from './dunder'
import _forEach from './internal/forEach'

const evaluate = dunder('forEach')

const forEach = (target, predicate) =>
  _forEach(evaluate(target), predicate)

export default curry(forEach)
