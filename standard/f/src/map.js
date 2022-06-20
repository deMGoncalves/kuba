import curry from './curry'
import dunder from './dunder'
import _map from './internal/map'

const evaluate = dunder('map')

const map = (target, predicate) => (
  _map(evaluate(target), predicate)
)

export default curry(map)
