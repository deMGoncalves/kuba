import curry from './curry'

const includes = (target, x) =>
  target?.includes?.(x)

export default curry(includes)
