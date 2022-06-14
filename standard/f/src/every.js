import curry from './curry'

const every = (target, predicate) => (
  target?.every?.((x) => predicate(x))
)

export default curry(every)
