import curry from './curry'
import dunder from './dunder'

const evaluate = dunder('forEach')

const forEach = (target, predicate) =>
  evaluate(target)?.forEach(predicate)

export default curry(forEach)
