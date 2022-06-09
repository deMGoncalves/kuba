import curry from './curry'

const find = (targets, predicate) =>
  targets?.find?.(predicate)

export default curry(find)
