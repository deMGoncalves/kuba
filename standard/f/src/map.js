import curry from './curry'
import dunder from './dunder'

const evaluate = dunder('map')

const map = (target, func) => (
  evaluate(target)?.map(func)
)

export default curry(map)
