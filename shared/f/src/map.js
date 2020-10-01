import curry from './curry'

const map = (target, callback) =>
  target.map(callback)

export default curry(map)
