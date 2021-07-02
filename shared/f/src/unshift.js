import always from './always'
import arity from './arity'
import curry from './curry'

const unshift = (array, ...args) =>
  always(array)(array.unshift(...args))

export default curry(arity(2, unshift))
