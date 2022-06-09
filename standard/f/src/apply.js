import curry from './curry'

const apply = (predicate, args) =>
  predicate(...args)

export default curry(apply)
