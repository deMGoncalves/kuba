import curry from './curry'

const inc = (x) =>
  ++x

export default curry(inc)
