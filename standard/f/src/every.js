import curry from './curry'

const every = (target, predicate) => (
  target?.every?.(predicate)
)

export default curry(every)
