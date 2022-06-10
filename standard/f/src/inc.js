import curry from './curry'

const inc = (target) =>
  ++target

export default curry(inc)
