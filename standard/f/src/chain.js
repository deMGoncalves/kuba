import apply from './apply'
import arity from './arity'
import curry from './curry'
import map from './map'
import __ from './gap'

const chain = (...target) =>
  (...args) => (
    map(target, apply(__, args))
  )

export default curry(arity(1, chain))
