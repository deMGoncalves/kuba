import curry from './curry'

const includes = (array, x) =>
  array.includes(x)

export default curry(includes)
