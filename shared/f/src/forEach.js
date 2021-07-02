import curry from './curry'

const forEach = (array, func) =>
  array.forEach(func)

export default curry(forEach)
