import arity from './arity'
import curry from './curry'

const splice = (array, start, end, ...args) =>
  array.splice(start, end, ...args)

export default curry(arity(3, splice))
