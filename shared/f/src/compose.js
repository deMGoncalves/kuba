import arity from '@rex/f/src/arity'
import curry from '@rex/f/src/curry'

const compose = (first, ...outhers) =>
  (...args) =>
    outhers.reduceRight((x, y) => y(x), first(...args))

export default curry(arity(2, compose))
