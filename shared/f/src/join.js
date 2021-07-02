import curry from './curry'

const join = (array, separator) =>
  array.join(separator)

export default curry(join)
