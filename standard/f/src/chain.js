import apply from './apply'
import arity from './arity'
import curry from './curry'
import map from './map'
import __ from './gap'

const chain = (...targets) =>
  (...args) =>
    map(targets, apply(__, args))

export default curry(arity(1, chain))
