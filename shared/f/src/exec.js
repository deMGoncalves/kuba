import curry from './curry'

const exec = (pattern, target) =>
  pattern.exec(target)

export default curry(exec)
