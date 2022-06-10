import arity from './arity'
import curry from './curry'
import flip from './flip'
import reduce from './reduce'

const compose = (x, ...target) =>
  (...args) => (
    reduce(target, (a, b) => b(a), x(...args))
  )

export default curry(arity(2, flip(compose)))
