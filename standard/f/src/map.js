import curry from './curry'
import dunder from './dunder'

const evaluate = dunder('map')

const map = (target, predicate) => (
  evaluate(target)?.map?.(predicate)
)

export default curry(map)
