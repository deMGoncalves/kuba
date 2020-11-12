import curry from '@rex/f/src/curry'

const replace = (x, y, z) =>
  x.replace(y, z)

export default curry(replace)
