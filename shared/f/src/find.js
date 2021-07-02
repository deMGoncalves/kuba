import curry from './curry'

const find = (array, func) =>
  array.find(func)

export default curry(find)
