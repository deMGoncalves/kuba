import curry from './curry'

const assign = (x, y) =>
  Object.assign(x, y)

export default curry(assign)
