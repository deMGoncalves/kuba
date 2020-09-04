import curry from '@rex/f/src/curry'

const and = (x, y) =>
  x && y

export default curry(and)
