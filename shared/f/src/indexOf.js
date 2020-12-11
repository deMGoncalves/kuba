import curry from './curry'

const indexOf = (x, y) =>
  x.indexOf(y)

export default curry(indexOf)
