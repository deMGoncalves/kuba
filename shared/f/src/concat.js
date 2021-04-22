import curry from './curry'

const concat = (target, values) =>
  target.concat(values)

export default curry(concat)
