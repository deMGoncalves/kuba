const filter = (target, predicate) => (
  target?.filter?.((x) => predicate(x))
)

export default filter
