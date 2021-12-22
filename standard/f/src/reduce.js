import curry from './curry'

const reduce = (array, func, x) =>
  array.reduce(func, x)

export default curry(reduce)
