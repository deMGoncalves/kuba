import curry from './curry'

const always = (value) =>
  () => value

export default curry(always)
