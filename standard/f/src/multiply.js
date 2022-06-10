import curry from './curry'

const multiply = (x, y) => (
  x * y
)

export default curry(multiply)
