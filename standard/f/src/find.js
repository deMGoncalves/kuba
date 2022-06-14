import curry from './curry'

const find = (target, predicate) => (
  target?.find?.((x) => predicate(x))
)

export default curry(find)
