import curry from './curry'

const join = (target, separator) => (
  target?.join?.(separator)
)

export default curry(join)
