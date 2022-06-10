import curry from './curry'

const mod = (x, y) => (
  x % y
)

export default curry(mod)
