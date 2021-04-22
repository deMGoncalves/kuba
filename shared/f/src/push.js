import always from './always'
import arity from './arity'
import curry from './curry'

const push = (x, ...y) =>
  always(x)(x.push(...y))

export default curry(arity(2, push))
