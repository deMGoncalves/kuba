import curry from './curry'

const test = (pattern, target) =>
  pattern.test(target)

export default curry(test)
