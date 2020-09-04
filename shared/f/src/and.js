import curry from './curry'

const and = (x, y) =>
  x && y

export default curry(and)
