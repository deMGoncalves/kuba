import curry from './curry'

const find = (target, predicate) => (
  target?.find?.(predicate)
)

export default curry(find)
