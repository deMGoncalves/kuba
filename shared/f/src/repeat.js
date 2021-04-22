import curry from './curry'

const repeat = (target, n) =>
  n ? Array(n).toString().split(',').map(() => target) : []

export default curry(repeat)
