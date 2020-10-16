import always from '@rex/f/src/always'
import arity from '@rex/f/src/arity'
import curry from '@rex/f/src/curry'

const push = (x, ...y) =>
  always(x)(x.push(...y))

export default curry(arity(2, push))
