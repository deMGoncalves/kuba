import curry from './curry'

const dec = (target) =>
  --target

export default curry(dec)
