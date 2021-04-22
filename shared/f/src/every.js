import curry from './curry'

const every = (array, handler) =>
  array.every(handler)

export default curry(every)
