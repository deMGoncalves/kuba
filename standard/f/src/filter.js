import curry from './curry'

const filter = (target, predicate) => (
  target?.filter?.((x) => predicate(x))
)

export default curry(filter)
