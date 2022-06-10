import always from './always'
import arity from './arity'
import curry from './curry'

const unshift = (target, ...args) => (
  always(target)(target?.unshift?.(...args))
)

export default curry(arity(2, unshift))
