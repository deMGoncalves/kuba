import curry from './curry'

const typeOf = (target) => (
  typeof target
)

export default curry(typeOf)
