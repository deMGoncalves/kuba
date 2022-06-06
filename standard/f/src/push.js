import always from './always'
import arity from './arity'
import curry from './curry'
import dunder from './dunder'

const evaluate = dunder('push')

const push = (target, ...args) =>
  always(target)(evaluate(target)?.push(...args))

export default curry(arity(2, push))
