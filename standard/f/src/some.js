import curry from './curry'

const some = (target, predicate) =>
  target?.some(predicate)

export default curry(some)
