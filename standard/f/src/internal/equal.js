import reduce from './reduce'

const equal = (x, ...args) => (
  reduce(args, (a, b) => a === b, x)
)

export default equal
