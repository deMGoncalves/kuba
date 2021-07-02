import curry from './curry'

const indexOf = (array, x) =>
  array.indexOf(x)

export default curry(indexOf)
