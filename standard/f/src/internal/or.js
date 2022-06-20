import reduce from './reduce'

const or = (x, ...args) => (
  reduce(args, (a, b) => a || b, x)
)

export default or
