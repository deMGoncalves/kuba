import curry from './curry'

const filter = (targets, predicate) =>
  targets?.filter?.(predicate)

export default curry(filter)
