import curry from './curry'
import dunder from './dunder'

const evaluate = dunder('forEach')

const forEach = (target, predicate) => (
  evaluate(target)?.forEach?.((x) => predicate(x))
)

export default curry(forEach)
