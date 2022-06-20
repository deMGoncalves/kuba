const find = (target, predicate) => (
  target?.find?.((x) => predicate(x))
)

export default find
