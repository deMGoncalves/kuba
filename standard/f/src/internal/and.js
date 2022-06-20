import reduce from './reduce'

const and = (x, ...args) =>
  reduce(args, (a, b) => a && b, x)

export default and
