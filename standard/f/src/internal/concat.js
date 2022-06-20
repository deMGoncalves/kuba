import reduce from './reduce'

const concat = (x, ...args) => (
  reduce(args, (a, b) => a?.concat?.(b), x)
)

export default concat
