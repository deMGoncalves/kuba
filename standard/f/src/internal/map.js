const map = (target, predicate) => (
  target?.map?.((x) => predicate(x))
)

export default map
