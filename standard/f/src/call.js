import arity from './arity'
import curry from './curry'

const call = (func, ...args) =>
  func(...args)

export default curry(arity(2, call))
