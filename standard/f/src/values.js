import curry from './curry'

const values = (target) => (
  Object.values(target)
)

export default curry(values)
