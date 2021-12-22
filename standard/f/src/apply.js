import curry from './curry'

const apply = (func, args) =>
  func(...args)

export default curry(apply)
