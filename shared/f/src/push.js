import always from './always'
import arity from './arity'
import curry from './curry'

const push = (array, ...x) =>
  always(array)(array.push(...x))

export default curry(arity(2, push))
