import curry from './curry'

const trim = (target) => (
  target?.trim?.()
)

export default curry(trim)
