import curry from './curry'

const exec = (regex, target) =>
  regex?.exec?.(target)

export default curry(exec)
