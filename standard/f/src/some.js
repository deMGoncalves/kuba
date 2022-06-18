import curry from './curry'

const some = (target, predicate) => (
  target?.some?.((x) => predicate(x))
)

export default curry(some)
