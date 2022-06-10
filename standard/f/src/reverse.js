import curry from './curry'

const reverse = (target) => (
  target?.reverse?.()
)

export default curry(reverse)
