import curry from './curry'

const sort = (target, callback) =>
  target.sort(callback)

export default curry(sort)
