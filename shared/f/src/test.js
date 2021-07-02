import curry from './curry'

const test = (regex, x) =>
  regex.test(x)

export default curry(test)
