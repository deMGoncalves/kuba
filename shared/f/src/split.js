import curry from './curry'

const split = (x, y) =>
  String(x).split(y)

export default curry(split)
