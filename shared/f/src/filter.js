import curry from './curry'

const filter = (array, func) =>
  array.filter(func)

export default curry(filter)
