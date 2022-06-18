import curry from './curry'

const lt = (x, y) => (
  x < y
)

export default curry(lt)
