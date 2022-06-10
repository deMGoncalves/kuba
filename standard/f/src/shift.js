import curry from './curry'

const shift = (target) => (
  target?.shift?.()
)

export default curry(shift)
