import curry from './curry'

const map = (array, func) =>
  array.map(func)

export default curry(map)
