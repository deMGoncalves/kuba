import curry from './curry'

const test = (regex, target) => (
  regex?.test?.(target)
)

export default curry(test)
