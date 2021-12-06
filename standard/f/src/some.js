import curry from './curry'

const some = (array, func) =>
  array.some(func)

export default curry(some)
