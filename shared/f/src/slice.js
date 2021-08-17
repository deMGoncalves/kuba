import curry from './curry'

const slice = (array, start, end) =>
  array.slice(start, end)

export default curry(slice)
