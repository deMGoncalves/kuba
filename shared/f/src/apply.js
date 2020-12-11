import curry from './curry'

const apply = (target, args) =>
  target(...args)

export default curry(apply)
