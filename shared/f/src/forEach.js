import curry from './curry'
import idle from './idle'

const forEach = (target, callback) =>
  target.forEach((...args) => idle(callback.bind(null, ...args)))

export default curry(forEach)
