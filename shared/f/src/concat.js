import curry from './curry'

const concat = (x, y) =>
  x.concat(y)

export default curry(concat)
