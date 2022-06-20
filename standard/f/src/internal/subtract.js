import reduce from './reduce'

const subtract = (x, ...args) => (
  reduce(args, (a, b) => a - b, x)
)

export default subtract
