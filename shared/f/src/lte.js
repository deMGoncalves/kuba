import curry from './curry'

const lte = (value, delimiter) =>
  value <= delimiter

export default curry(lte)
