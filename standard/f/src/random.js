import curry from './curry'

const random = (min = 0, max = Number.MAX_SAFE_INTEGER) => (
  Math.floor(Math.random() * (max - min + 1) + min)
)

export default curry(random)
