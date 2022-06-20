const forEach = (target, predicate) => (
  target?.forEach?.((x) => predicate(x))
)

export default forEach
