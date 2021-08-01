import arity from './arity'
import curry from './curry'

const slice = (array, start, end = Infinity) =>
  array.slice(start, end)

export default curry(arity(2, slice))
