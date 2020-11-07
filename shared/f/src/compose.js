import arity from '@rex/f/src/arity'
import curry from '@rex/f/src/curry'
import flip from '@rex/f/src/flip'
import reduce from '@rex/f/src/reduce'

const compose = (first, ...outhers) =>
  (...args) =>
    reduce(outhers, (x, y) => y(x), first(...args))

export default curry(arity(2, flip(compose)))
