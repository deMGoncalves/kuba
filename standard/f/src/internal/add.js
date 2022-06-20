import reduce from './reduce'

const add = (x, ...args) =>
  reduce(args, (a, b) => a + b, x)

export default add
