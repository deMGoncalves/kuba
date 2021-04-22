import curry from './curry'

const replace = (x, y, z) =>
  x.replace(y, z)

export default curry(replace)
