import curry from './curry'

const reduce = (x, y, z) =>
  x.reduce(y, z)

export default curry(reduce)
