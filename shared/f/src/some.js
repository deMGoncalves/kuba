import curry from './curry'

const some = (array, handler) =>
  array.some(handler)

export default curry(some)
