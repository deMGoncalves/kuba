import curry from './curry'

const every = (array, func) =>
  array.every(func)

export default curry(every)
