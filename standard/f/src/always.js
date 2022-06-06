import curry from './curry'

const always = (target) =>
  () => target

export default curry(always)
