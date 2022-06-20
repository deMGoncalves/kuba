const every = (target, predicate) => (
  target?.every?.((x) => predicate(x))
)

export default every
