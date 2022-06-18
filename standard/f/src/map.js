import curry from './curry'
import dunder from './dunder'

const evaluate = dunder('map')

const map = (target, predicate) => (
  evaluate(target)?.map?.((x) => predicate(x))
)

export default curry(map)
