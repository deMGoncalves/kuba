import _and from './_and'
import arity from '@rex/f/src/arity'
import curry from '@rex/f/src/curry'
import reduce from '@rex/f/src/reduce'

const and = (x, ...y) =>
  reduce(y, _and, x)

export default curry(arity(2, and))
