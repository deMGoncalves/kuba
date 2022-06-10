import curry from './curry'

const pop = (target) => (
  target?.pop?.()
)

export default curry(pop)
