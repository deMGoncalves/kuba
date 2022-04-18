import curry from './curry'

const set = (key, value, target) => (
  target[key] = value
)

export default curry(set)
