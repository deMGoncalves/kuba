import arity from './arity'
import curry from './curry'
import flip from './flip'
import reduce from './reduce'

const compose = (first, ...outhers) =>
  (...args) =>
    reduce(outhers, (x, y) => y(x), first(...args))

export default curry(arity(2, flip(compose)))
