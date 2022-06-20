const reduce = (target, predicate, accumulator) => (
  target?.reduce?.((x, y) => predicate(x, y), accumulator)
)

export default reduce
