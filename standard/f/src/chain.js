import arity from './arity'
import curry from './curry'
import map from './map'

const chain = (...target) =>
  (...args) =>
    map(target, (func) => func(...args))

export default curry(arity(1, chain))
