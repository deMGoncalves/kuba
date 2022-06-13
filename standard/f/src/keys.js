import curry from './curry'

const keys = (target) => (
  Object?.keys?.(target)
)

export default curry(keys)
