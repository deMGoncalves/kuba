import curry from './curry'

const reduce = (target, predicate, x) => (
  target?.reduce?.(predicate, x)
)

export default curry(reduce)
