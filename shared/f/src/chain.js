import arity from './arity'
import curry from './curry'
import map from './map'

const chain = (...targets) =>
  (...args) =>
    map(targets, (target) => target(...args))

export default curry(arity(1, chain))
