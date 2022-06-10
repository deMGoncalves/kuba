import curry from './curry'

const indexOf = (target, x) =>
  target?.indexOf?.(x)

export default curry(indexOf)
