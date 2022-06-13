import curry from './curry'

const len = (target) => (
  Object.keys(target)?.length
)

export default curry(len)
