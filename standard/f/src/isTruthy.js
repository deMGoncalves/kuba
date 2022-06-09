import curry from './curry'

const truth = (target) => (
  !!target
)

export default curry(truth)
