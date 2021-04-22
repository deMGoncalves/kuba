import always from './always'
import arity from './arity'
import curry from './curry'

const unshift = (x, ...y) =>
  always(x)(x.unshift(...y))

export default curry(arity(2, unshift))
