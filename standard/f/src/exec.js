import curry from './curry'

const exec = (regex, x) =>
  regex.exec(x)

export default curry(exec)
