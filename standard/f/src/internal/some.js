const some = (target, predicate) => (
  target?.some?.((x) => predicate(x))
)

export default some
