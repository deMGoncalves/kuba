import curry from './curry'

const always = (x) =>
  () => x

export default curry(always)
