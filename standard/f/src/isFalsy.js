import curry from './curry'

const isFalsy = (target) => (
  !target
)

export default curry(isFalsy)
