import or from './or'

const repeat = (target, n) => (
  Array(or(n, 0)).fill(target)
)

export default repeat
