import curry from './curry'

const len = (x) =>
  Object.keys(x).length

export default curry(len)
