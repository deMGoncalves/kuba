import curry from './curry'

const filter = (target, predicate) => (
  target?.filter?.(predicate)
)

export default curry(filter)
