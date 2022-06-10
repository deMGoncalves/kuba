import curry from './curry'

const sort = (target, predicate) => (
  target?.sort?.(predicate)
)

export default curry(sort)
