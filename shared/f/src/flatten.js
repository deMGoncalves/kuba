import curry from './curry'

const flatten = (array) =>
  array.flat(Infinity)

export default curry(flatten)
