import arity from './arity'
import curry from './curry'

const call = (target, ...args) =>
  target(...args)

export default curry(arity(2, call))
