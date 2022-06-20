const flatten = (target, depth = Infinity) => (
  target?.flat?.(depth)
)

export default flatten
