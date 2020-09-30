import curry from './curry'

const forEach = (target, callback) =>
  target.forEach(callback)

export default curry(forEach)
