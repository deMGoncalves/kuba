import curry from './curry'

const repeat = (value, n) =>
  n ? Array(n).toString().split(',').map(() => value) : []

export default curry(repeat)
