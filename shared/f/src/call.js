import arity from '@rex/f/src/arity'
import curry from '@rex/f/src/curry'

const call = (target, ...args) =>
  () => target(...args)

export default curry(arity(2, call))
