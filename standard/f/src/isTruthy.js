import curry from './curry'

const isTruthy = (target) => (
  !!target
)

export default curry(isTruthy)
